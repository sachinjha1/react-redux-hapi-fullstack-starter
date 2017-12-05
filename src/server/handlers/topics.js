import topicCtrl from '../../graphql/controllers/topic.server.controller';

const { create, read } = topicCtrl;

const Handlers = [{
  method: 'POST',
  path: '/api/topics',
  handler: (request, reply) => create(request, reply),
}, {
  method: 'GET',
  path: '/api/topics',
  handler: (request, reply) => read(request, reply),
},
];

export default Handlers;
