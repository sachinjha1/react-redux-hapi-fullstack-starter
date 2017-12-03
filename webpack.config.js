const path = require('path');

const config = {
  entry: ['babel-polyfill', `${__dirname}/src/client/renderer/client.jsx`],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
};

module.exports = config;
