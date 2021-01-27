const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  responseTo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  ]
});

module.exports = Posts = mongoose.model('posts', postSchema);
