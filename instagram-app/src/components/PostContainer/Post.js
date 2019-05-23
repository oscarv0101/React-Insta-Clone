import React from 'react';

const Post = props => {
    return (
        <div className="post-border">
         

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