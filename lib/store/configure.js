import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import initialState from '../reducers/initial-state';

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
