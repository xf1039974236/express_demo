const mongoose = require('../drivers/mongooseDriver');
// const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
  },
  picture: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model('users', UserSchema);
