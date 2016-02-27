var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;

var server = http.createServer(handler);

function handler(req, res){
  var endpoint = req.url;

  if (endpoint === '/') {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + "/public/index.html", function(err, file){
      if(err){
        console.log(err);
        return;
      }
        res.end(file);

    });
  }

}


server.listen(port, function(){
  console.log("Server is listening on port" + port + ".  Ready to accept requests!");
});
