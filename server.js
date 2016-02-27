var http = require('http');
var handler = require('./src/handler.js');

var port = process.env.PORT || 3000;


var server = http.createServer(handler);


  server.listen(port, function(){
    console.log("Server is listening on port" + port + ".  Ready to accept requests!");
  });
