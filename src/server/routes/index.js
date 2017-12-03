import Handlers from '../handlers/';

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
    path: '/{path*}',
    handler: Handlers.rootHandler,
  },
  {
    method: 'GET',
    path: '/api/movies',
    handler: Handlers.moviesHandler,
  },
];

export default Routes;
