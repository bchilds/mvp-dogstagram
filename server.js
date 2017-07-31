var express = require('express');
var reqHandler = require('./server/reqHandler.js')



var app = express();

//do all config work here

app.get('/', reqHandler.getIndex);

module.exports = app;