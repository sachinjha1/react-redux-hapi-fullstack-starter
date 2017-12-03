import { matchRoutes } from 'react-router-config';
import { title } from '../../../config/development';
import Routes from '../../client/routes/index';
import serverRenderer from '../renderer/server';
import configureStore from '../../client/store/server-configure';
import { data } from '../../client/api/test-data.json';

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
