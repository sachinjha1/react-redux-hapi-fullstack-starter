import mongoose from 'mongoose';

const { Schema } = mongoose;

/* Topics like react, redux, hapi etc... For each topic short desc, video links,
 study links, twitter handlers */
const topicSchema = new Schema({
  topicName: String,
  shortDesc: String,
  createdOn: { type: Date, default: Date.now },
});

/* Schema -> Model -> Document(s) */
export default mongoose.model('Topic', topicSchema);
