import React from 'react';
import $ from 'jquery';

class AuthPanel extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('Signed in!');
		this.props.handleSignedIn();
	}

	handleSignup(event) {
		event.preventDefault();
		console.log('Signed up');
		this.props.handleSignedIn();
	}

	render() {
		return (
			<div className="authPanel">
			<form onSubmit={this.handleSubmit}>
				<label>Username: </label><input ref="username" name="username" />
				<label>Password: </label><input ref="password" name="password" />
				<button type="submit">Log In</button>
				<button onClick={this.handleSignup}>Sign Up</button>
			</form>
			</div>
		);
	}

};

export default AuthPanel;