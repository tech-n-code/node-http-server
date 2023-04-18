var http   = require('http');
var routes = require('./routes');

var handleRequest = (req, res) => {
  if(routes[req.url] !== undefined) {
    routes[req.url](req, res);
  } else {
    res.end("404, no such route");
  }
};

var server = http.createServer(handleRequest);

server.listen(8000, () => {
  console.log("Listening...");
});