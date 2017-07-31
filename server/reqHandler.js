var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var db = require('../db/configure.js');
var User = require('../db/user.js');
var Post = require('../db/post.js');

// Get Index
exports.getIndex = (req, res) => {
	//needs improvement
	res.sendFile('/Users/BChilds/Desktop/HR Git/MVP-Dogstagram/index.html')
};

exports.signUp = (req, res) => {

};

exports.login = (req, res) => {

};

exports.getPost = (req, res) => {

};

exports.makePost = (req, res) => {

};