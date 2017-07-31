var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	username: String,
	imagePath: String,
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
