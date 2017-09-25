import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const BASE_URL = process.env.PUBLIC_URL+"/";
console.log('base url',BASE_URL);
const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));

  registerServiceWorker();