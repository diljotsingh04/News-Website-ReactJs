import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo"><a href="/" style={{ "textDecoration": "none", "color": "white" }}>NewZ</a></div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i >
          <div id="hamburger"></div>
          <div id="hamburger"></div>
          <div id="hamburger"></div></i>
        </label>
        <ul>
          <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
          <li><NavLink to="/about" activeclassname="active">About Us</NavLink></li>
          <li><NavLink to="/contact" activeclassname="active">Contact Us</NavLink></li>
          <li><NavLink to="/rating" activeclassname="active">Rating</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
