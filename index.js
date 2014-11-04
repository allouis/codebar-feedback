var http = require('http');
var router = require('./lib/router');

var server = http.createServer();
server.on('request', router.handleRequest);

if (!module.parent) {
  server.listen(process.env.PORT);
}

module.exports = server;
