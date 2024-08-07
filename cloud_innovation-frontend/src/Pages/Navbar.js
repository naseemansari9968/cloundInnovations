import React from 'react'
import { Link } from 'react-router-dom'
import "../Pages/navbar.css"

const Navbar = () => {
  return (
    <ul className='navbar'>
        <span>Movie library</span>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
  </ul>
  )
}

export default Navbar