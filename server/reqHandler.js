var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var db = require('../db/configure.js');
var User = require('../db/user.js');
var Post = require('../db/post.js');

// Get Index
exports.getIndex = (req, res) => {
	//needs improvement
	res.sendFile('index.html')
};

exports.signUp = (req, res) => {
	//var username = req.body.username;
	//var password = req.body.password;
	var password = 123;
	var username = 'bchilds3';
	User.findOne({username: username})
	.then( (user) => {
		if (!user){
			//hash password using bcrypt
			//then save new user to DB
			bcrypt.hash('sushi', null, null, function(err, hash) {
				var newUser = new User({
					username: username,
					password: hash,
					profilePicUrl: 'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
				});
				newUser.save()
				.then((err, user) => {
					res.sendStatus(201);
				});
			});
		} else {
			console.log('User exists');
			res.redirect('https://media.giphy.com/media/xTiTnoHt2NwerFMsCI/giphy.gif');
		}
	})
};

exports.login = (req, res) => {
	//var username = req.body.username;
	//var password = req.body.password;
	console.log('>>>>>>>>>>> ',req.body);
	var username = 'bchilds';
	var password = '123';
	User.findOne({username: username})
	.then( (user) => {
		user.comparePassword(password, (res) => {
			if(!res) {
				res.redirect('https://media.giphy.com/media/xTiTnoHt2NwerFMsCI/giphy.gif');
			}

			//if Success, send user and 200
			res.status(200).send(user);
		});
	});


};

exports.getPost = (req, res) => {
	//tbd on autoincrement
};

exports.makePost = (req, res) => {
	console.log('REQ.BODY >>>>', req.body);
	var newPost = new Post({
		//temp static data
		username: req.body.username,
		imagePath: req.body.imagePath,
	});
	newPost.save((err, post) => {
		if(err) {
			console.log('error posting');
			res.redirect('https://media.giphy.com/media/xTiTnoHt2NwerFMsCI/giphy.gif')
		}
		res.sendStatus(200);
	})
};

exports.getAllPosts = (req, res) => {
	Post.find({})
	.then((posts) => {
		res.status(200).send(posts);
	});
};

exports.cena = (req, res) => {
	res.redirect('https://media.giphy.com/media/xTiTnoHt2NwerFMsCI/giphy.gif')
};