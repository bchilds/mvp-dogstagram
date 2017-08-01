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