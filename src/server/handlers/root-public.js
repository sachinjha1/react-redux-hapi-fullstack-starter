const Handlers = [{
  method: 'GET',
  path: '/assets/{param*}',
  handler: {
    directory: {
      path: './public',
      listing: false,
    },
  },
}];

export default Handlers;
