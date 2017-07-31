var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	username: String,
	imagePath: String,
	//will need autoincrement here
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
