import React from 'react';
import logo from '../../assets/logo.png';
import './Footers.css';

const Footer = () => (
  <div className="footer__footer section__padding">

    <div className="footer__footer-links">
      <div className="footer__footer-links_logo">
        <img src={logo} alt="footer_logo" />
        <p>Santa Barbara, CA <br /> All Rights Reserved</p>
      </div>
      <div className="footer__footer-links_div">
        <p>Contact</p>
        <p>Social Media</p>
        <p>Blog</p>
      </div>
      <div className="footer__footer-links_div">
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Agreements</p>
      </div>
      <div className="footer__footer-links_div">
        <p>Santa Barbara, CA</p>
        <p>(408)-693-4231</p>
        <p>ask3_support@ask3.com</p>
      </div>
    </div>

    <div className="footer__footer-copyright">
      <p>@2021 Ask3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;