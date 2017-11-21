const Hapi = require('hapi');
const { port, title } = require('./config');
const Vision = require('vision');
const Inert = require('inert');
const Handlebars = require('handlebars');

const server = Hapi.Server({
  port,
});

const rootHandler = (request, h) =>
  h.view('index', {
    title,
    body: 'Body of index page',
  });

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

