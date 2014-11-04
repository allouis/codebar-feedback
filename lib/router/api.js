var router = require('router');

var Feedback = require('../models/Feedback');

var api = router();

api.options('/api/feedback', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);
  res.end();
});

api.post('/api/feedback', function (req, res) {
  Feedback.create(req.body);
  res.writeHead(200);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);
  res.end();
});

api.get('/api/feedback', function (req, res) {
  Feedback.find({}, function (err, results) {
    if (err) {
      res.writeHead(500);
      res.write(err);
      return res.end();
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.write(results);
    res.end();
  });
});

module.exports = api;
