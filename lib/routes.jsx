import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './components/movies/';
import EditMovie from './components/movies/edit-movie';

const routes = (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route path="/movies" component={Movies} />
    <Route path="/movie/:id" component={EditMovie} />
  </Switch>
);

export default routes;
