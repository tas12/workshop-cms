var fs = require('fs');
var querystring = require('querystring');

function handler(req, res){
  var endpoint = req.url;
  var ext = endpoint.split('.')[1];

  switch(endpoint){
    case "/":
      res.writeHead(200, {"Content-Type": "text/html"});
      getFile("index.html");
      break;

    case "/create/post":
    console.log("submit clickedßß");
    console.log(req.method);
      if (req.method === 'POST') {
        var allTheData = '';
        req.on('data', function(chunks){
          allTheData += chunks;
        });
        req.on('end', function(){
          console.log(querystring.parse(allTheData));
        });
        res.writeHead(301, {"Location": "/" });
        res.end();
      } else {
        console.log("method = ", req.method);
      }
      break;
    default:
      res.writeHead(200, {"Content-Type": contentType(ext)});
      getFile(endpoint);

  }

function getFile(fileName){
  fs.readFile(__dirname + "/../public/" + fileName, function(err, data){
    if (err) {
      console.log("GETFILEERROR",err);
      return;
    }
    res.end(data);
  });
}

function contentType(ext) {
  switch(ext) {
    case "html" : return "text/html";
    case "css" : return "text/css";
    case "png" : return "image/png";
    case "json" : return "text/json";
    default: console.log(ext);

}


}

}
module.exports = handler;
