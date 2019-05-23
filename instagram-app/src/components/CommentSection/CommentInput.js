import React from 'react';
import "../CommentSection/CommentSection.css"
const CommentInput = props => {
    return (
        <div className="comment-input-wrapper">
                <form>
                    <input className="input-comment" type="text" placeholder="   Add a comment..."></input>
                </form>
            </div>
    )
}

export default CommentInput