import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import MovieList from './movie-list';
import { addSome, minusSome } from '../../actions/counter';
import setMovies from '../../actions/movies';
import Config from '../../../../config/development';


class Movies extends React.Component {
  async componentDidMount() {
    this.props.setMovies();
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

        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

const fetchMovies = async (dispatch) => {
  let hostUrl = '';
  if (typeof window === 'undefined') {
    hostUrl = `http://0.0.0.0:${Config.port}`;
  }
  const response = await fetch(`${hostUrl}/api/movies`);
  const movies = await response.json();
  dispatch(setMovies(movies));
};

function loadData(store) {
  /* Loading data for SSR */
  return store.dispatch(fetchMovies);
}

Movies.propTypes = {
  counter: PropTypes.number.isRequired,
  addSome: PropTypes.func.isRequired,
  minusSome: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  setMovies: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSome: () => dispatch(addSome(5)),
    minusSome: () => dispatch(minusSome(5)),
    setMovies: () => fetchMovies(dispatch),
  };
}

export default{
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(Movies),
};
