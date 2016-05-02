
var listenPort = 3000;
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.status(200).send("Sample provider service is alive. It is now: " + new Date().toUTCString());
});

app.post('/echo/:message', function(req, res){
  res.status(200).send("Echo at " + new Date().toUTCString() + " '" + req.params.message + "'\n");
});

app.listen(listenPort, function(){
  console.log('Provider service listening on ', listenPort);
});
