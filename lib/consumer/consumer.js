
var listenPort = process.env.CONSUMER_PORT || 3002;
var express = require('express');
var app = express();
var request = require('request');

if(!process.env.PROVIDER){
  throw 'PROVIDER service URL must be provide in order to use this consumer';
}
var providerUrl = process.env.PROVIDER;

app.get('/:message', function(req, res){
  console.log('contacting provider to echo:', req.params.message);
  request.post(providerUrl + '/echo/' + req.params.message, function(error, response, body){
    if(error){
      console.log('ERROR', error);
      res.status(500).send(error);
    }else{
      console.log('INFO - success', body);
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
