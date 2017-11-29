import { title } from '../config';
import serverRenderer from '../renderers/server';
import configureStore from '../store/server-configure';

const Handlers = {};

Handlers.rootHandler = (request, reply) => {
  const store = configureStore();
  const serverView = serverRenderer(request.url.path, store);
  // Grab the initial state from our Redux store
  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const preloadedStateJS = `window.__PRELOADED_STATE__ =${preloadedState};`;
  return reply.view('index', {
    title,
    serverView,
    preloadedStateJS,
  });
};

Handlers.helloHandler = (request, reply) => {
  const res = { name: 'sachin' };
  return res;
};

export default Handlers;
