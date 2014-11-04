var router = require('router')();

var api = require('./api');

router.all('*', function (req, res) {
  
  return api(req, res);
});

module.exports = {
  handleRequest: router
}
