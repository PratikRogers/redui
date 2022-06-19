/* eslint-disable */
import 'babel-polyfill'; 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import RedUIStore from "./rogersframework/Store/Store";
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter,

} from 'react-router-dom';

const store = RedUIStore({});
const configSet = process.env.REACT_APP_LOGIN_CONFIG;
if (configSet === "LOCAL") {

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('root'));
  registerServiceWorker();
}
else {
     ReactDOM.render(
      <Provider  store={store}>
        <BrowserRouter >
          <App />

        </BrowserRouter>
      </Provider>,

      document.getElementById('root'));
    registerServiceWorker();

}
