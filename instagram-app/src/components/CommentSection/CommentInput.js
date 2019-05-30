import React from 'react';
import "../CommentSection/CommentSection.css"
const CommentInput = props => {
    return (
        <div className="comment-input-wrapper">
                <form className="comment-form" onSubmit={props.addNewComment}>
                    <input 
                    className="input-comment" 
                    type="text" placeholder="   Add a comment..." 
                    onChange={props.changeComment}></input>
                    <button className="input-button" onClick={props.addNewComment}>Post</button>
                </form>
            </div>
    )
}

export default CommentInput