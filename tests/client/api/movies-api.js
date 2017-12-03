import MoviesApi from '../../../lib/api/movie-api/';
import { data } from '../../../lib/api/test-data.json';

const api = new MoviesApi(data);

describe('MoviesApi', () => {
  it('exposes movies as an object', () => {
    const movies = api.getMovies();
    expect(movies[0]).toHaveProperty('id');
  });
});
