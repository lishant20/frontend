import React from 'react'
import logo from '../assets/Logo.jpg'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" width="80px" />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button onClick={() => navigate('/contact', {replace: true})}>Get Started</button>
    </div>
  )
}

export default Navbar;