import React from 'react';
import Post from './Post.jsx';


const PostPanel = (props) => {
	return(
		<div className="post-list">
			{props.posts.map(post => 
				<Post post={post} key={post._id}/>
			)}
		</div>
	);
}


export default PostPanel;

