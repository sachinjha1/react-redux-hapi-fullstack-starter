import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './app';

const serverRenderer = ({ url }) => {
  const context = {};
  const comp =
    (
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>);
  return ReactDOMServer.renderToString(comp);
};

export default serverRenderer;
