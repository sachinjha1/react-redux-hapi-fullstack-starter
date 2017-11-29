import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const initialState = window.__PRELOADED_STATE__;
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );
  /* eslint-enable */
}
