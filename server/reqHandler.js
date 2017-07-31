var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var db = require('../db/configure.js');
var User = require('../db/user.js');
var Post = require('../db/post.js');

// Get Index
exports.getIndex = (req, res) => {
	res.sendFile('index.html');
};