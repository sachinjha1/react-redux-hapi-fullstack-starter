import { data } from '../../client/api/test-data.json';

const Handlers = [{
  method: 'GET',
  path: '/api/movies',
  handler: (request, reply) => data.movies,
}];

export default Handlers;
