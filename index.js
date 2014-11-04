var http = require('http');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/codebar-feedback');

var router = require('./lib/router');
var server = http.createServer();
server.on('request', router.handleRequest);

if (!module.parent) {
  server.listen(process.env.PORT || 8000);
}

module.exports = server;
