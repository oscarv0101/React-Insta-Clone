import React from 'react';
import heart from "../../assests/heart.svg"
import comment from "../../assests/comment.svg"
import CommentSection from "../CommentSection/CommentSection"


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
            <div className="icons-section">
                <img 
                onClick={props.heartClick}
                alt ="heart"
                className="logos heart"
                src={heart}/>
                <img 
                alt ="comment"
                className="logos"
                src={comment}/>
            </div>
            <div className="likes-section">
                <p>{props.post.likes} likes</p>
            </div>
            <CommentSection comments={props.post.comments} timestamp={props.post.timestamp}/>
        </div>
    )
}

export default Post;