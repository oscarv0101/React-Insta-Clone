import React from 'react';

const Comment = props => {
    return (
        <div className="comment-container">
        <div className="comment-text">
            <span className="user">{props.comment.username} </span>
            <span className="comment">{props.comment.text}</span>
        </div>
        

        </div>
    )
}

export default Comment;