var fs = require('fs');
var port = process.env.PORT || 3000;
var quesrystring = require('querystring');

function handler(req, res){
  var endpoint = req.url;
  var allTheData = '';


  if (endpoint === '/') {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + "/../public/index.html", function(err, file){
      if(err){
        console.log(err);
        return;
      }
      res.end(file);

    });
  } else  if (endpoint === '/create-post') {

    req.on('data', function(chunkOfData){
      allTheData += chunkOfData;
    });

    req.on('end', function(){
      console.log(quesrystring.parse(allTheData));
      res.end();
    });
    res.writeHead(301, {"Location": "/"});
    res.end();
  } else {
    var ext = endpoint.split(".")[1];

    if (ext === "css" ) {
      res.writeHead(200, {"Content-Type": "text/css"});
    } else if (ext === "jpg") {
      res.writeHead(200, {"Content-Type": "image/jpg"});
    }

    fs.readFile(__dirname + "/../public" + endpoint, function(err, file){
      if (err) {
        console.log(err);

      }
      res.end(file);
    });
  }
  }

module.exports = handler;
