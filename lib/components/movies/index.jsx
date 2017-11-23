import React from 'react';
import MoviesApi from '../../api/movie-api/';
import { data } from '../../api/test-data.json';
import MovieList from './movie-list';

const moviesApi = new MoviesApi(data);

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: moviesApi.getMovies(),
    };
  }

  render() {
    return (
      <div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

Movies.propTypes = {};

export default Movies;
