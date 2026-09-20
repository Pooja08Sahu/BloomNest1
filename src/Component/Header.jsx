import React from "react";
import { NavLink } from "react-router-dom";

import "../Component/CSS/Header.css"



const Header = () => {

function handLogin(){
  alert('Login')
}

function handSignup(){
  alert('Signup')
}



  return (
    <div className="outer">
      <div className="logo">Bloom<span>Nest</span></div>

      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `item ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `item ${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `item ${isActive ? "active" : ""}`}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `item ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search..." />
        <button onClick={handLogin}>Login</button>
        <button onClick={handSignup}>Sign Up</button>
      
      </div>
    </div>

/* slider */




  );
};

export default Header;




  



