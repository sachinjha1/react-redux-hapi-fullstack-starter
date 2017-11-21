const path = require('path');

const config = {
  entry: ['babel-polyfill', `${__dirname}/lib/components/app.jsx`],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
};

module.exports = config;
