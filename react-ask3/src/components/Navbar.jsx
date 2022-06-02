import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/" className="link"><img src="logo192.png" alt="poop" /></a>
        <span className="ask"><a href="/" className="link">ask</a></span>
        <span className="num">3</span>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        {/*<li className="nav__item">
          <a href="/forum" className="nav__link">
            Forum
          </a>
  </li>*/}
        <li className="nav__item">
          <a href="/addpost" className="nav__link">
            Add Post
          </a>
        </li>
        <li className="nav__item">
          <a href="/questions" className="nav__link">
            Questions
          </a>
        </li>
        <li className="nav__item">
          <a href="/login" className="nav__link">
            Login
          </a>
        </li>
        <li className="nav__button">
          <a href="/Signup" className="nav__link">
            <button type="button">Sign up</button>
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
