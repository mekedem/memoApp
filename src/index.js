import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/Approuter';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const state = store.getState();
console.log(state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();