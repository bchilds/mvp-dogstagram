//post util functions
import $ from 'jquery';

const MAIN_URL = 'http://localhost:1337';

export const getAllPosts = (callback) => {
	$.ajax({
		url: `${MAIN_URL}/posts`,
		success: posts => {
			callback(posts);
		},
	});
};

export const makePost = (input, callback) => {
	$.ajax({
		url: `${MAIN_URL}/post`,
		type: 'POST',
		dataType: 'application/json',
		data: JSON.stringify(input),
		contentType: 'application/json',
		success: post => {
			getAllPosts(callback);
		},
		error: (err, statusCode) => {
			getAllPosts(callback);
			// getAllPosts(callback)
			return null;
		},
	});
}