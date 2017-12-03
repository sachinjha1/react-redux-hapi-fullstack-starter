import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../client/reducers/root';

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  /* Grab the state from a global variable injected into the server-generated HTML */
  const preloadedState = window.__PRELOADED_STATE__;
  /* Allow the passed state to be garbage-collected */
  delete window.__PRELOADED_STATE__;

  return createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );
  /* eslint-enable */
}
