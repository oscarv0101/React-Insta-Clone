import React, {Component} from 'react';
import Comment from "../CommentSection/Comment"
import CommentInput from "../CommentSection/CommentInput"

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            comment: '',
            timestamp: props.timestamp
        }
    }
    buttonHandler = event => {
        event.preventDefault();
      }

render(){
    return(
        <div>
            {this.state.comments.map((c,i) => <Comment comment={c} key={i}/>)}
            <p className="time-stamp">{this.props.timestamp}</p>
            <CommentInput button={this.buttonHandler}/>
        </div>
    )
}
}

export default CommentSection;