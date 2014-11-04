var mongoose = require('mongoose');

var User = mongoose.Schema({
  email: String,
  created: {
    default: Date.now,
    type: Date
  }
});

var UserModel = mongoose.model('User', User);

module.exports = UserModel;
