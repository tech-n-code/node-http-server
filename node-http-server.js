'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  var guests = ['Mary', 'Don'];
  var guestsJSON = JSON.stringify(guests);

  res.setHeader('Content-Type', 'application/json');
  res.end(guestsJSON);
});

server.listen(port, function() {
  console.log('Listening on port', port);
});


/* BASIC EXAMPLE

'use strict';

const http = require('http');
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(port, function() {
  console.log('Listening on port', port);
});

*/