import React, { Component } from 'react'
import './Forum.css';
import axios from "../../api/axios";

const DATA_URL = 'http://127.0.0.1:4000/data'

class Forum extends Component {
  
  constructor(props) {
    super(props);
    this.state = {posts: []};
  
  
    //posts is an array containing all of the posts from the backend
    //each post has the variables:
    // .content (the body), .title (title), .created_at (timestamp), 
  }

  async componentDidMount(){
    console.log('Component did mount');
    let response = await axios.get(DATA_URL,
            {
            headers: {
                //'X-CSRF-Token': csrfToken,
                'Access-Control-Allow-Origin': 'http://127.0.0.1:4000/signup',
                'Content-Type': 'application/json',
                'Access-Control-Response-Method': 'http://127.0.0.1:4000/signup'
            }
        })
        .then((data) => this.setState({posts: data.data}))
    console.log(this.state);
    }
  
  render(){
    <div class="flex-container">
      <div class="user">
        <p> </p>
        <h1>Forum</h1>
        <p1>
        </p1>
      </div>
    </div>
    let c = [];
    let postArray = this.state.posts
    for(let i=0; i<postArray.length; i++){
        c.push(
          <div className="forum_container" id="topic">
          <div class="content">
            <p class="userimage">img</p>
            <p class="date">{postArray[i].created_at}</p>
            <p></p>
            <br/>
            <h class="username">username</h>
            <br />
            <h1>{postArray[i].title}</h1>
          </div>
          </div>
        );
    }
  return(
    <div>
      {c}
    </div>

  );
  }
}

export default Forum;