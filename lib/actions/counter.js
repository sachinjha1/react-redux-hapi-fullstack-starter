import * as types from './types';

export function addSome(count) {
  return { type: types.ADD_SOME, count };
}

export function minusSome(count) {
  return { type: types.MINUS_SOME, count };
}
