const path = require('path');

const config = {
  entry: `${__dirname}/lib/components/app.jsx`,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
    ],
  },
};

module.exports = config;
