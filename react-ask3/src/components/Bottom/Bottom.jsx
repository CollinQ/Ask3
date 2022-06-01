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
      <p2>Shaping people, shaping business</p2>
    </div>

    <div className="image">
      <img src={image} alt="img" />
    </div>

  </div>

  
);

export default WhatGPT3;