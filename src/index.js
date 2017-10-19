import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as types from './actions/types'
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import thunk from 'redux-thunk'
import firebase from './firebase'
import { Route, BrowserRouter } from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers)
/**

 */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let firestore = firebase.firestore();
    let gamesCollection = firestore
      .collection("games")
      .where('owners.' + user.uid, '==', 'ADMIN')
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges.forEach((change)=>{
          if (change.type === "added") {
            let charactersCollection = firestore
              .collection(`games/${change.doc.id}/characters`)
              .onSnapshot((characterSnapshots) => {
                characterSnapshots.docChanges.forEach(function (characterChange) {
                store.dispatch({
                  type: types.SAVE_CHARACTER,
                  payload: {
                    ...characterChange.doc.data(),
                    gameId: change.doc.id,
                    id: characterChange.doc.id
                  }
                });
              });
            }, 
            (error) => {
              console.log("on snapshot error: ", error)
            });
            store.dispatch({
              type: types.ADD_LISTENER,
              payload: charactersCollection
            })
            let itemsCollection = firestore
              .collection(`games/${change.doc.id}/items`)
              .onSnapshot((itemSnapshots) => {
                itemSnapshots.docChanges.forEach(function (itemChange) {
                store.dispatch({
                  type: types.SAVE_ITEM,
                  payload: {
                    ...itemChange.doc.data(),
                    gameId: change.doc.id,
                    id: itemChange.doc.id
                  }
                });
              });
            }, 
            (error) => {
              console.log("on snapshot error: ", error)
            });
            store.dispatch({
              type: types.ADD_LISTENER,
              payload: itemsCollection
            })
          }
          store.dispatch({
            type: types.SAVE_GAME,
            payload: {
              ...change.doc.data(),
              id: change.doc.id
            }
          });
        });
      }, (error) => {
        console.log("on snapshot error: ", error)
      });
      store.dispatch({
        type: types.ADD_LISTENER,
        payload: gamesCollection
      })
  } else {
    store.dispatch({
      type: types.REMOVE_LISTENERS
    });
    console.log("No logged in user");
  }
})



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();