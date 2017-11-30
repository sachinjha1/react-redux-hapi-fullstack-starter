import { matchRoutes } from 'react-router-config';
import { title } from '../config';
import Routes from '../routes';
import serverRenderer from '../renderers/server';
import configureStore from '../store/server-configure';
import { data } from '../api/test-data.json';

const Handlers = {};

Handlers.rootHandler = async (request, reply) => {
  const store = configureStore();
  const urlPath = request.url.path;
  const promises = matchRoutes(Routes, urlPath).map(({ route }) =>
    (route.loadData ? route.loadData(store) : null));
  await Promise.all(promises);
  const serverView = serverRenderer(urlPath, store);
  // Grab the initial state from our Redux store
  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const preloadedStateJS = `window.__PRELOADED_STATE__ =${preloadedState};`;
  return reply.view('index', {
    title,
    serverView,
    preloadedStateJS,
  });
};

Handlers.moviesHandler = (request, reply) => data.movies;

export default Handlers;
