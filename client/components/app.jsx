import React from 'react';
import AuthPanel from './authPanel.jsx';
import PostPanel from './PostPanel.jsx';
import * as PostModel from '../models/post.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			signedIn: false,
			profPicUrl: 'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
			username: 'bchilds',
		}
		this.getAllPosts = this.getAllPosts.bind(this);
		this.handleSignedIn = this.handleSignedIn.bind(this);
		this.makePost = this.makePost.bind(this);

	}

	getAllPosts(allPosts) {
		this.setState({
			posts: allPosts,
		});
	}

	handleSignedIn() {
		this.setState({
			signedIn: !this.state.signedIn,
		})
	}

	makePost() {
		PostModel.makePost({
			username: this.state.username,
			imagePath: this.refs.imageUrl.value,
		}, this.getAllPosts);
	}


	componentDidMount() {
		PostModel.getAllPosts(this.getAllPosts);
	}

	render() {
		var post = null;
		if(this.state.signedIn) {
			post = 
				<div>
					<label>Image URL: </label> <input ref="imageUrl" name="imageUrl" /> <button onClick={this.makePost}> + </button>
				</div>	
		}


		return (
			<div className="app">
				<h1>Dogstagram</h1>
				{!this.state.signedIn && <AuthPanel signedIn={this.state.signedIn} handleSignedIn={this.handleSignedIn} />}
				{post}
				<PostPanel posts={this.state.posts} signedIn={this.state.signedIn}/>
			</div>

		);
	}


}


export default App;
