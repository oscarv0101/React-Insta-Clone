import React from 'react';
import "../CommentSection/CommentSection.css"
const CommentInput = props => {
    return (
        <div className="comment-input-wrapper">
                <form className="comment-form" onSubmit={props.handlePost}>
                    <input 
                    name="text"
                    value = {props.text}
                    className="input-comment" 
                    onChange={props.handleInput}
                     placeholder="   Add a comment..." 
                    ></input>
                    <button className="input-button" >Post</button>
                </form>
            </div>
    )
}

export default CommentInput