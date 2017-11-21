import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import Header from './layout/header';

const App = () => (
  <div>
    <Header title="Starter Kit" />
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </div>
);

App.propTypes = {};

export default App;
