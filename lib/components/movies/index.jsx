import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import MoviesApi from '../../api/movie-api/';
import { data } from '../../api/test-data.json';
import MovieList from './movie-list';
import { addSome, minusSome } from '../../actions/counter';

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
        {`Current counter is ${this.props.counter}`}
        <Button color="primary" onClick={() => { this.props.addSome(); }}>
          Plus5
        </Button>
        <Button color="primary" onClick={() => { this.props.minusSome(); }}>
          Minus5
        </Button>

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

Movies.propTypes = {
  counter: PropTypes.number.isRequired,
  addSome: PropTypes.func.isRequired,
  minusSome: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSome: () => dispatch(addSome(5)),
    minusSome: () => dispatch(minusSome(5)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movies);
