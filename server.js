var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;


app.post('/trigger', function (req, res) {

});

app.get('/', function (req, res) {
  res.send("hello world");
});

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);

});