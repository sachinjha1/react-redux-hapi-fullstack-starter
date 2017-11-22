import Hapi from 'hapi';
import Vision from 'vision';
import Inert from 'inert';
import Handlebars from 'handlebars';
import { port, title } from './config';
import serverRenderer from './components/server-renderer';

const server = Hapi.Server({
  port,
});

const rootHandler = (request, h) => {
  const serverView = serverRenderer(request.url.path);
  return h.view('index', {
    title,
    serverView,
  });
};

const provision = async () => {
  await server.register(Vision);
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public',
        listing: false,
      },
    },
  });
  server.views({
    engines: { html: Handlebars },
    path: './views',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: rootHandler,
  });

  await server.start();
};

provision().then(() => {
  /* eslint-disable no-console */
  console.log(`Server started at port ${server.info.uri}`);
}, (err) => {
  throw err;
});

