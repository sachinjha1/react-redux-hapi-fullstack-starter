import Hapi from 'hapi';
import Vision from 'vision';
import Inert from 'inert';
import Handlebars from 'handlebars';
import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
import { host, port, nodeEnv } from '../../config/development';
import Routes from './handlers/';

polyfill();
process.env.NODE_ENV = nodeEnv;
const server = Hapi.Server({
  host,
  port,
});

const provision = async () => {
  await server.register(Vision);
  await server.register(Inert);

  server.views({
    engines: { html: Handlebars },
    path: './src/server/views',
  });

  server.route(Routes);

  await server.start();
};

provision().then(() => {
  /* eslint-disable no-console */
  console.log(`Server started at port ${server.info.uri} NODE_ENV = ${process.env.NODE_ENV}`);
}, (err) => {
  throw err;
});

