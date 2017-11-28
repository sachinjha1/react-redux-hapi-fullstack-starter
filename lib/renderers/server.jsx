import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configure';

import App from '../components/app';

const serverRenderer = (url) => {
  const context = {};
  const store = configureStore();
  const comp =
    (
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </Provider>);
  return ReactDOMServer.renderToString(comp);
};

export default serverRenderer;
