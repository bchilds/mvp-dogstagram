var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	profilePicUrl: String,
});

var User = mongoose.model('User', userSchema);

User.prototype.comparePassword = function (enteredPassword, callback) {
	var username = this.username
	bcrypt.compare(enteredPassword, this.password, (err, isMatch) => {
		if (err) return null;
		callback(null, isMatch);
	});
},

module.exports = User;
