import React from 'react';
import AuthPanel from './authPanel.jsx';
import PostPanel from './PostPanel.jsx';
import * as PostModel from './models/post.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			signedIn: false,
			profPicUrl: 'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
		}
		this.getAllPosts = this.getAllPosts.bind(this);
		this.handleSignedIn = this.handleSignedIn.bind(this);

	}

	getAllPosts(allPosts) {
		this.setState({
			posts = allPosts;
		});
	}

	handleSignedIn() {
		this.setState({
			signedIn: !this.state.signedIn,
		})
	}

	componentDidMount() {

	}

	render() {
		return (

			<div className="app">
				<h1>Dogstagram</h1>
				{!this.state.signedIn && <AuthPanel signedIn={this.state.signedIn} handleSignedIn={this.handleSignedIn} />}
				<PostPanel posts={this.state.posts} signedIn={this.state.signedIn}/>
			</div>

		);
	}


}


export default App;
