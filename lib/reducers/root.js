import { combineReducers } from 'redux';
import counter from './counter';
import movies from './movies';

const rootReducer = combineReducers({
  counter,
  movies,
});

export default rootReducer;
