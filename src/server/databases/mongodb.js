import mongoose from 'mongoose';
import { mongodbUri, mongodbOption } from '../../../config/development';

const mongodbSetup = () => {
  mongoose.set('debug', true);
  mongoose.Promise = Promise;
  mongoose.connect(mongodbUri, mongodbOption);
  mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));
};

export default mongodbSetup;
