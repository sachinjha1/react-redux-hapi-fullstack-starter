import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './layout/header';
import Routes from '../routes';


const App = () => (
  <div>
    <Header title="Starter Kit" />
    <div>{renderRoutes(Routes)}</div>
  </div>
);

App.propTypes = {};

export default App;
