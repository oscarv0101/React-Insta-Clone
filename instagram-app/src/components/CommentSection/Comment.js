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
Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };

export default Comment;