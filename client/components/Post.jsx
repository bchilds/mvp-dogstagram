import React from 'react';
import * as PostModel from '../models/post.js'
import * as Filters from '../Utils/utils.js'

class Post extends React.Component {
	constructor(props) {
		super(props)

		this.image = new Image();
		this.image.crossOrigin = 'anonymous';
		this.image.src = props.post.imagePath;

		this.state = {
			update: 0
		};
	}

	componentDidMount() {
		if(this.can1){
			var ctx = this.can1.getContext("2d");
			var ctx2 = this.can2.getContext("2d");
			var ctx3 = this.can3.getContext("2d");

			ctx.drawImage(this.image,0,0,this.image.width,this.image.height);

			if(this.can1.width > 0) {
				var thePix = Filters.getPixels(this.can1);
				ctx3.putImageData(thePix, 0, 0);

				const grayPix = Filters.filterImage(Filters.grayscale, this.can1);
				ctx2.putImageData(grayPix, 0, 0);
				const invert = Filters.filterImage(Filters.invert, this.can1);
				ctx3.putImageData(invert, 0, 0);
			}	

			// this.setState({
			// 	update: this.state.update++,
			// });
		}
	}

	render() {
		var canvas = null;
		if(this.image.width > 0) {
			canvas = 
			<div>
				<p>{this.props.post.username}</p>
				<canvas ref={(el) => {this.can1 = el;}} width={this.image.width} height={this.image.height}></canvas>
				<canvas ref={(el) => {this.can2 = el;}} width={this.image.width} height={this.image.height}></canvas>
				<canvas ref={(el) => {this.can3 = el;}} width={this.image.width} height={this.image.height}></canvas>
			</div>
		}
		return (
			<div className="doggo-post">
				{canvas}
			</div>
		);
	}
}

export default Post;