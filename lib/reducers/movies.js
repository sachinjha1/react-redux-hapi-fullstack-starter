import initialState from './initial-state';
import { SET_MOVIES } from '../actions/types';

export default function counterReducer(state = initialState.movies, action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}
