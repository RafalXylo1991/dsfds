var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.get('/', function (req, res) {
  res.send("cipeczka");
  
})

var server = app.listen(3000)