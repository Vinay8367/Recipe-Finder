import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({ toggleDarkMode , darkMode }) => {
  return (
    <div className='navbar'>
        <h1 className='logo'> 🍽️ Recipe Finder</h1>
        <button onClick={toggleDarkMode} className='dark-btn'>{darkMode ? "light mode " : " Dark Mode"} </button>
    </div>
  )
}

export default Navbar;