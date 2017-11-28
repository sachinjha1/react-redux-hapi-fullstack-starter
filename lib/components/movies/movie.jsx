import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Typography } from 'material-ui';

const Movie = ({ movie }) => (
  <div>
    <Card style={{ maxWidth: 275 }}>
      <Typography type="headline">
        <Link to={`/movie/${movie.id}`}><strong>{`${movie.name}-${movie.year}`}</strong></Link>
      </Typography>
      <Typography type="body1">
        {movie.director}
      </Typography>
    </Card>
    <br />
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    director: PropTypes.string,
    tagline: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

export default Movie;
