import initialState from './initial-state';
import { ADD_SOME, MINUS_SOME } from '../actions/types';

export default function counterReducer(state = initialState.counter, action) {
  let newState;
  switch (action.type) {
    case ADD_SOME:
      newState = state + action.count;
      return newState;
    case MINUS_SOME:
      newState = state - action.count;
      return newState;
    default:
      return state;
  }
}
