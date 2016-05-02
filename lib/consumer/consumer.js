
var listenPort = 3002;
var express = require('express');
var app = express();
var request = require('request');

if(!process.env.PROVIDER){
  throw 'PROVIDER service URL must be provide in order to use this consumer';
}
var providerUrl = process.env.PROVIDER;

app.get('/:message', function(req, res){
  request.post(providerUrl + '/echo/' + req.params.message, function(error, response, body){
    //console.log(error,'/',response,'/',body);
    if(error){
      res.status(500).send(err);
    }else{
      res.status(200).send(body);
    }
  });
});

app.post('/echo/:message', function(req, res){
  res.status(200).send("Echo at " + new Date().toUTCString() + " '" + req.params.message + "'\n");
});

app.listen(listenPort, function(){
  console.log('Consumer service listening on ', listenPort, ' consuming ', providerUrl);
});
