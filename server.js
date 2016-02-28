var http = require('http');
var handler = require('./src/handler.js');
var port = process.env.PORT || 3000;

http.createServer(handler).listen(port, function(){
  console.log("listening on port " + port);
});
