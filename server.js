var express = require('express');
var reqHandler = require('./server/reqHandler.js')



var app = express();

//do all config and routing work here

app.get('/', reqHandler.getIndex);

app.post('/signup', reqHandler.signUp);

app.post('/login', reqHandler.login);

app.get('/post/:id', reqHandler.getPost);
app.get('/posts', reqHandler.getAllPosts);

app.post('/post', reqHandler.makePost);


module.exports = app;