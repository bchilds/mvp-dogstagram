//user util functions
import $ from 'jquery';

const MAIN_URL = 'http://localhost:1337';

export const signIn = (input, callback) => {
	// console.log('in User model');
	$.ajax({
		url: `${MAIN_URL}/login`,
		type: 'POST',
		dataType: 'application/json',
		data: JSON.stringify(input),
		contentType: 'application/json',
		statusCode: {
			200: function(data) {
				callback(input.username);
			}
		},
		error: err => {
			// console.log(err.responseText)
			// return console.log('>>>>> SIGNIN FAILED <<<<<');
			return null;
		},
	});
}

export const signUp = (input, callback) => {
	// console.log('in User model');
	$.ajax({
		url: `${MAIN_URL}/signup`,
		type: 'POST',
		dataType: 'application/json',
		data: JSON.stringify(input),
		contentType: 'application/json',
		statusCode: {
	  	201: function(data) {
	  		callback();
	  	}
	  },
		error: err => {
			// console.log(err.responseText)
			return null;
		},
	});
}