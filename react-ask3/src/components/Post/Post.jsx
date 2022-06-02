import React, { Component } from 'react'
import './Post.css';
import icon from '../../assets/user-icon.png';

class Post extends Component {

    render() {
        return (
            <div className="post">
                <div className="forum_container" id="topic">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/19/2022</p>
                        <p></p>
                        <br />
                        <h class="username">jshen0303</h>
                        <br />
                        <h1>What is pi?</h1>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/26/2022</p>
                        <p class="username">jmun</p>

                        <h>It is 3.14</h>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/21/2022</p>
                        <p class="username">cqian</p>
                        <h>It's 2</h>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/20/2022</p>
                        <p class="username">c_xu</p>
                        <h>3.14</h>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/20/2022</p>
                        <p class="username">catli</p>
                        <h>It's 22/7</h>
                    </div>
                </div>
            </div>
        );
    }

}

export default Post;