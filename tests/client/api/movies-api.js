import MoviesApi from '../../../src/client/api/movie-api/';
import { data } from '../../../src/client/api/test-data.json';

const api = new MoviesApi(data);

describe('MoviesApi', () => {
  it('exposes movies as an object', () => {
    const movies = api.getMovies();
    expect(movies[0]).toHaveProperty('id');
  });
});
