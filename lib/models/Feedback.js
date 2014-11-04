var mongoose = require('mongoose');

var Feedback = mongoose.Schema({
  date: {
    default: Date.now,
    type: Date
  },
  data: Object
});

var FeedbackModel = mongoose.model('Feedback', Feedback);

module.exports = FeedbackModel;
