import React, {Component} from 'react';
import Comment from "../CommentSection/Comment"

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

render(){
    return(
        <div>
            {this.state.comments.map((c,i) => <Comment comment={c} key={i}/>)}
        </div>
    )
}
}

export default CommentSection;