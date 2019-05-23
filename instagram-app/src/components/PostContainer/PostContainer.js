import React from 'react';
import Post from '../PostContainer/Post';

const PostsContainer = props => {
    return(
        <div className="posts-container-wrapper">
            {props.posts.map(p => <Post post={p}/>)}
        </div>
    )
}

export default PostsContainer;