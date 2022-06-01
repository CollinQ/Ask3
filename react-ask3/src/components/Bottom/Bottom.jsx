import React from 'react';
import Feature from '../feature/Feature.jsx';
import { Link } from 'react-router-dom'
import image from '../../assets/logo.png';
import './Bottom.css';

const WhatGPT3 = () => (
  <div className="Home_ask3 section__margin" id="ask3">
    <div className="Home_ask3-heading">
      <h1 className="text">Every Question Has An Answer</h1>
      <p>What is Ask3?</p>
      <p2>Ask3 is an incentivized question and answer forum that connects a community of knowledgeable individuals to eager learners. Answers are confirmed by users through an upvote and downvote system, allowing users who answer correctly to accumulate XP and gain credibility. In exchange, XP can be redeemed and rewarded through MetaMask, which encourages individuals to participate in forum discussions.</p2>
    </div>

    <div className="image">
      <img src={image} alt="img" />
    </div>

  </div>

  
);

export default WhatGPT3;
