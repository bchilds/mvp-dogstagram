import React from 'react';
import * as PostModel from '../models/post.js'
class Post extends React.Component {
	constructor(props) {
		super(props)

		this.image = new Image();
		this.image.src = props.post.imagePath;
		console.log(this.image.width, this.image.height);
	}

	componentDidMount() {
		var ctx = this.can1.getContext("2d");
		var ctx2 = this.can2.getContext("2d");
		var ctx3 = this.can3.getContext("2d");

		ctx.drawImage(this.image,0,0,this.image.width,this.image.height);

		ctx2.drawImage(this.image,0,0,this.image.width,this.image.height);

		ctx3.drawImage(this.image,0,0,this.image.width,this.image.height);
	}

	render() {
		return (
			<div className="doggo-post">
				<p>{this.props.post.username}</p>
				<canvas ref={(el) => {this.can1 = el;}} width={this.image.width} height={this.image.height}></canvas>
				<canvas ref={(el) => {this.can2 = el;}} width={this.image.width} height={this.image.height}></canvas>
				<canvas ref={(el) => {this.can3 = el;}} width={this.image.width} height={this.image.height}></canvas>
			</div>
		);
	}
}

export default Post;