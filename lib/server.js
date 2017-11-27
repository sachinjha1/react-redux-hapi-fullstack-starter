import Hapi from 'hapi';
import Vision from 'vision';
import Inert from 'inert';
import Handlebars from 'handlebars';
import { port } from './config';
import Routes from './server/routes';

const server = Hapi.Server({
  host: '0.0.0.0',
  port,
});

const provision = async () => {
  await server.register(Vision);
  await server.register(Inert);

  server.views({
    engines: { html: Handlebars },
    path: './views',
  });

  server.route(Routes);

  await server.start();
};

provision().then(() => {
  /* eslint-disable no-console */
  console.log(`Server started at port ${server.info.uri}`);
}, (err) => {
  throw err;
});

