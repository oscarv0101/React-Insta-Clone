import React, {Component} from 'react';
import Comment from "../CommentSection/Comment"
// import CommentInput from "../CommentSection/CommentInput"
import "../CommentSection/CommentSection.css"

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: []
            
            
        }
    }
    componentDidMount(){
        this.setState({
            comments: this.props.comments
        })
    }
    handleInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    handlePost = event => {
        event.preventDefault();
        const newComment = {
            username: "Guest",
            text: this.state.comment
        }
        
        this.setState({
            comments: [...this.state.comments, newComment], comment: ""
        })
        
    }
    
    
render(){
    return(
        <div>
            {this.state.comments.map((c,i) => <Comment comment={c} key={i}/>)}
            <p className="time-stamp">{this.props.timestamp}</p>
            {/* <CommentInput handelInput={this.handleInput} handlePost={this.handlePost} /> */}
            <div className="comment-input-wrapper">
                <form className="comment-form" onSubmit={this.handlePost}>
                    <input 
                    name="comment"
                    value = {this.state.comment}
                    className="input-comment" 
                    onChange={this.handleInput}
                     placeholder="   Add a comment..." 
                    ></input>
                    <button className="input-button" >Post</button>
                </form>
            </div>
        </div>
        
    )
}
}

export default CommentSection;