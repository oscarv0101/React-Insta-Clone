import React from 'react';


const Post = props => {
    return (
        <div className="post-border">
            <div className="user-info-wrapper">
                <img 
                alt ="username"
                className="user-image"
                src={props.post.thumbnailUrl}/>
                <p>{props.post.username}</p>

            </div>

            <div className="post-image-wrapper">
                <img 
                alt = "post-thumbnail"
                className="post-image"
                src={props.post.imageUrl}/>
            </div>
            
        </div>
    )
}

export default Post;