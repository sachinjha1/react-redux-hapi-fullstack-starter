import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configure';
import App from '../components/app';

const store = configureStore();

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>),
  document.getElementById('root'),
);
