var http = require('http');

var port = process.env.PORT || 3000;
var message = "so happy to be at nodegirls";

function handler(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(message);
  res.end();
}

var server = http.createServer(handler);

server.listen(port, function(){
  console.log("Server is listening on port" + port + ".  Ready to accept requests!");
});
