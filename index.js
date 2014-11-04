var http = require('http');
var handleRequest = require('./handleRequest');

var server = http.createServer();
server.on('request', handleRequest);

if (!module.parent) {
  server.listen(process.env.PORT);
}

module.exports = server;
