var router = require('router')();

var api = require('./api');

router.all('*', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk.toString();
  });
  req.on('end', function () {
    try {
      req.body = JSON.parse(body);
    } catch (e) {
      req.body = body;
    }
    return api(req, res);
  })
});

module.exports = {
  handleRequest: router
}
