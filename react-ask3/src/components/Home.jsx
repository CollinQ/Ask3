import React, { Component } from 'react'
import ai from '../assets/ai.png';
import people from '../assets/people.png';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <div className="Home_header section_padding" id="home">
            <div className="Home_header-content">
              <h1 className="gradient_text">Welcome to Ask3</h1>
              <p>If you have a question, Someone has an answer.</p>
        
              <div className="Home_header-content_input">
                <input type="email" placeholder="Your Email Address" />
                <a href="/signup" className="nav__link"><button type="button">Get Started</button></a>
              </div>
              <div className="Home_header-content_people">
                <img src={people} />
                <p></p>
              </div>
            </div>
        
            <div className="Home_header-image">
                <img src={ai} />
            </div>
          </div>
        )
    }
}
