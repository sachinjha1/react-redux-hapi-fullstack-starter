import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>
  (
    <h2>
      Hello React
    </h2>
  );

App.propTypes = {};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
