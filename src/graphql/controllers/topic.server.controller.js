import Topic from '../models/topic.server.model';

const create = (request, reply) => {
  console.log('Entering create!!!!');
  const entry = new Topic({
    topicName: request.payload.topicName,
    shortDesc: request.payload.shortDesc,
  });

  entry.save(() => { console.log(`Error is ${entry}`); });
};

const read = (request, reply) => {
  return { topicName: 'react', shortDesc: 'Awesome view library' };
};

export default { create, read };
