const mongoose = require('../drivers/mongooseDriver');

const { Schema } = mongoose;

const JokeSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model('jokes', JokeSchema);
