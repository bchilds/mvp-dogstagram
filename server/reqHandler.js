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
	var newPost = new Post({
		//temp static data
		username: 'bchilds',
		imagePath: 'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
	});
	newPost.save((err, post) => {
		if(err) {
			console.log('error posting');
			return res.send(404);
		}
		console.log(post);
		res.send(200)
	})
};

exports.getAllPosts = (req, res) => {
	Post.find({})
	.then((posts) => {
		res.send(200, posts);
	})
}