import * as types from './types';

export default function setMovies(movies) {
  return { type: types.SET_MOVIES, movies };
}

