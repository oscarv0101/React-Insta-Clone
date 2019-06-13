import React, {Component} from 'react';
import dummyData from "../../dummy-data"
import PostContainer from "../PostContainer/PostContainer"
import SearchBar from "../SearchBar/SearchBar"


class PostsPage extends Component {
  constructor(){
    super()
    this.state = {
      posts: dummyData
      
    }
  }


  changeHandler = e => {
    this.setState({input: e.target.value})
  }

  find = event => {
    event.preventDefault();
    const post = this.state.posts.filter(post=>{
      if(post.username===this.state.input){
        return true;
      }
      else {
        return false;
      }
      
    })
    this.setState({posts: post})

  }
  
  
  
  
    render(){
  return ( 
    <div className="App">
      <SearchBar search={this.state.input} change={this.changeHandler} searchGram={this.find}/>
      <PostContainer posts = {this.state.posts} heartClick={this.heartClick}/>
    </div>
  );
}
}


export default PostsPage;