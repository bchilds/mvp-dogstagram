import React from 'react';
import * as PostModel from '../models/post.js'
class Post extends React.Component {
	constructor(props) {
		super(props)

		this.image = new Image();
		this.image.src = props.post.imagePath;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="doggo-post">
				<p>{this.props.post.username}</p>
				<img src={this.image.src}/>
			</div>
		);
	}
}

export default Post;