var express = require('express');
var reqHandler = require('./server/reqHandler.js')
var browserify = require('browserify-middleware');
var path = require('path');


var app = express();


app.get('/bundle.js', browserify('./client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, './client')));
//do all config and routing work here

app.get('/', reqHandler.getIndex);

app.post('/signup', reqHandler.signUp);

app.post('/login', reqHandler.login);

app.get('/post/:id', reqHandler.getPost);
app.get('/posts', reqHandler.getAllPosts);

app.post('/post', reqHandler.makePost);

app.get('/cena', reqHandler.cena);
app.post('/cena', reqHandler.cena);



var port = 1337;
app.listen(port);
console.log("Listening on " + port);
