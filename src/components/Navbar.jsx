import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>

    <div className='circle'></div>
    <div className='circle2'></div>
    <header className='navbar'>
    <div className='logo'>
        <h1>Bicraft</h1>
           </div>
    <ul className='middle'>
        <div className='nav-links'>
            <NavLink to="/" className= 'nav-items'>Home</NavLink>
            <NavLink to="/product" className= 'nav-items'>Product</NavLink>
            <NavLink to="/faq" className= 'nav-items'>FAQ</NavLink>
            <NavLink to="/blog" className= 'nav-items'>Blog</NavLink>
            <NavLink to="/aboutus" className= 'nav-items'>About Us</NavLink>
        </div>
    </ul>

    <ul className='last'>
        
        <NavLink to="/login" className= 'Login'>Login</NavLink>
        <NavLink to="/signup" className= 'Signup'>Sign Up</NavLink>
        
    </ul>
 
    </header>
    
    </>
  )
}

export default Navbar