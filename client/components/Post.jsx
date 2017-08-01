import React from 'react';
import * as PostModel from '../models/post.js'
class Post extends React.Component {
	constructor(props) {
		super(props)


	}


	render() {
		return (
			<div className="doggo-post">
				<p>{props.username}</p>
				<img src={props.imageUrl} />
			</div>
		);
	}
}

export default Post;