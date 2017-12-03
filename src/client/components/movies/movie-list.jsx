import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';

const MovieList = ({ movies }) => (
  <div>{movies.map(movie => (<Movie key={movie.id} movie={movie} />))}</div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    director: PropTypes.string,
    tagline: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.string,
  })).isRequired,
};

export default MovieList;
