var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
// mongoose.connect('mongodb://localhost/data/db', { 
// 	server: {reconnectTries: Number.MAX_VALUE} 
// });
// mongoose.Promise = require('bluebird');

var promise = mongoose.createConnection('mongodb://localhost/myapp', {
  useMongoClient: true,
});

promise.then(function(db) {
	connection.openUri('mongodb://localhost/myapp', { server: {reconnectTries: Number.MAX_VALUE} });
});

var db = promise;

autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Mongodb connection is open');
});

module.exports = db;