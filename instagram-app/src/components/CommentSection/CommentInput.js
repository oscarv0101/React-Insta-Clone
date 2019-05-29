import React from 'react';
import "../CommentSection/CommentSection.css"
const CommentInput = props => {
    return (
        <div className="comment-input-wrapper">
                <form className="comment-form">
                    <input className="input-comment" type="text" placeholder="   Add a comment..."></input>
                    <button className="input-button" onClick={props.button}>Post</button>
                </form>
            </div>
    )
}

export default CommentInput