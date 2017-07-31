var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	profilePicUrl: String,
});

var User = mongoose.model('User', userSchema);

User.prototype.comparePassword = (enteredPassword, callback) => {
	bcrypt.compare(enteredPassword, this.password, (err, res) => {
		if (err) return null;
		callback(res);
	});
},

module.exports = User;
