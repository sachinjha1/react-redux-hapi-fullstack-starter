import React from 'react';
import routes from '../routes';
import Header from './layout/header';

const App = () => (
  <div>
    <Header title="Starter Kit" />
    {routes}
  </div>
);

App.propTypes = {};

export default App;
