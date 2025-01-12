import React from "react";
import logo from '../assets/Logo.jpg'
import { NavLink } from "react-router-dom";

function Navbar(){
  return (
    <div className="navbar">
        <img src={logo} alt="page-logo" width="80px"/>
        <ul>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/products'><li>Products</li></NavLink>
          <NavLink to='/about'><li>About</li></NavLink>
          <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar