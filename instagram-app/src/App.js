import React, {Component} from 'react';
import dummyData from './dummy-data';
import withAuthenticate from "../src/components/authentication/withAuthenticate"
import './App.css';
import PostsPage from "../src/components/PostContainer/PostsPage"
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);
class App extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      input: "",
      search: dummyData
      
      
    }
  }

  
  
  componentDidMount(){
    this.setState({posts: dummyData})
  }
  
  
  
  
    render(){
      
  return ( 
    <div className="App">
      <ComponentFromWithAuthenticate/>
      {/* <PostsPage/> */}
    </div>
  );
}
}


export default App;
