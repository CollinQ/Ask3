import React from 'react';
import icon3 from '../../assets/icon3.png';
import icon2 from '../../assets/icon1.png';
import './Boxes.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div class="flex-container">

    <div class="flex-child magenta">
      <img src={icon3} />
      <p> </p>

      <h1>Questions and Answers</h1>
      <p1>
        a;lsdkfjasjd;fkalksdjf;ka
      </p1>
      <p2><a href="/questions" className="nav__link">Questions ></a></p2>
    </div>

    <div class="flex-child green">
      <img src={icon2} />
      <p> </p>

      <h1>Custom Profiles</h1>
      <p1>
        a;lsdkfjasjd;fkalksdjf;ka
        
      </p1>
      <p2><a href="/profile" className="nav__link">Profile ></a></p2>
    </div>

  </div>

  </div>
);

export default Blog;