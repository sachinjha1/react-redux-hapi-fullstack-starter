import Handlers from './handlers';

const Routes = [
  {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: './public',
        listing: false,
      },
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: Handlers.rootHandler,
  },
  {
    method: 'GET',
    path: '/hello',
    handler: Handlers.helloHandler,
  },
];

export default Routes;
