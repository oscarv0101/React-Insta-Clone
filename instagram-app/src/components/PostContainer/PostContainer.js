import React from 'react';
import Post from '../PostContainer/Post';
import "../PostContainer/PostContainer.css";

const PostsContainer = props => {
    return(
        <div className="posts-container-wrapper">
            {props.posts.map(p => <Post post={p} key={p.imageUrl} heartClick={props.heartClick}/>)}
        </div>
    )
}

export default PostsContainer;