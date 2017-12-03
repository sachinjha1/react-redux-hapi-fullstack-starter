import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../../client/components/app';

const serverRenderer = (url, store) => {
  const context = {};
  const html =
    (
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </Provider>);

  return ReactDOMServer.renderToString(html);
};

export default serverRenderer;
