import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieList from '../../../../src/client/components/movies/movie-list';

const movies = [{
  id: 1,
  name: 'a movie',
  year: '2016',
  director: 'Sachin',
}, {
  id: 2,
  name: 'another movie',
  year: '2017',
  director: 'Pravin',
}, {
  id: 3,
  name: 'one another movie',
  year: '2017',
  director: 'Pravin',
}];

describe('Movie', () => {
  it('renders correctly', () => {
    const testComp = <BrowserRouter><MovieList movies={movies} /></BrowserRouter>;
    const tree = renderer.create(testComp).toJSON();
    expect(tree.children.length).toBe(3);
    expect(tree).toMatchSnapshot();
  });
});
