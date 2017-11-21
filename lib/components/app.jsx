import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    nbr: 45,
  };

  async componentDidMount() {
    this.setState({
      nbr: await this.asyncFunc(),
    });
  }

  asyncFunc = () => Promise.resolve(99);

  render() {
    return <h2>Hello React {this.state.nbr}</h2>;
  }
}

App.propTypes = {};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
