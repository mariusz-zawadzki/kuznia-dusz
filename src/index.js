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
import fbase from 'firebase'
import { Route, BrowserRouter } from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers)
/**

 */

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let firestore = firebase.firestore();
    firestore.collection("games")
      .where('owners.' + user.uid, '==', 'ADMIN')
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges.forEach((change)=>{

          if (change.type === "added") {
            firestore.collection(`games/${change.doc.id}/characters`)
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
            });
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
  } else {
    console.log("No logged in user");
    let provider = new fbase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);

  }

  // querySnapshot.forEach(function(doc) {

  //     console.log(doc.id, " => ", doc.data());
  // });
})

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     console.log(user)
//     store.dispatch(
//       {
//         type: types.SIGN_IN,
//         payload: user.uid
//       }
//     );
//     // const firestore = firebase.firestore();
//   }
// });


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();