const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('success');
});

mongoose.connection.on('error', () => {
  console.log('error');
});

module.exports = mongoose;
