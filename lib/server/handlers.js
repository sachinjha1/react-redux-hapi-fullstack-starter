import { title } from '../config';
import serverRenderer from '../renderers/server';

const Handlers = {};

Handlers.rootHandler = (request, reply) => {
  const serverView = serverRenderer(request.url.path);
  return reply.view('index', {
    title,
    serverView,
  });
};

Handlers.helloHandler = (request, reply) => {
  const res = { name: 'sachin' };
  return res;
};

export default Handlers;
