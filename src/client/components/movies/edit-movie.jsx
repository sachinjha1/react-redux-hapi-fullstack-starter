import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

const EditMovie = ({ match }) => (
  <div>
    Movie ID: {match.params.id}
    <br />
    <Link to="/"><ArrowBackIcon color="primary" /> Go Back!</Link>
  </div>
);

EditMovie.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default EditMovie;

