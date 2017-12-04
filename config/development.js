module.exports = {
  host: '0.0.0.0',
  port: process.env.PORT || 8080,
  nodeEnv: 'development',
  title: 'My custom page title',
  mongodbUri: 'mongodb://rexpiuser:rexpiuser@ds129796.mlab.com:29796/rexpi',
  mongodbOption: { useMongoClient: true },
};
