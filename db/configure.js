var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/dogstagram', { server: {reconnectTries: Number.MAX_VALUE} });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Mongodb connection is open');
});

module.exports = db;