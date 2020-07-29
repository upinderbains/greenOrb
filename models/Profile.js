const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  profile_photo: {
    type: String,
  },
  background: {
    type: String,
  },
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
