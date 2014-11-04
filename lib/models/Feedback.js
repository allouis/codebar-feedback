var mongoose = require('mongoose');
var User = require('./User');

var Feedback = mongoose.Schema({
  from: UserModel,
  date: {
    default: Date.now,
    type: Date
  },
  data: Object
});

var FeedbackModel = mongoose.model('Feedback', Feedback);

module.exports = FeedbackModel;
