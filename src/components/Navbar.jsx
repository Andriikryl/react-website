import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-box'>
        <a href="#" className='nav-logo'>
          <img src="/public/img/logo.svg" alt="logo" />
        </a>
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Product</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>About</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Review</a>
            </li>
          </ul>
        </nav>

        <button>Shpo now</button>
    </div>
  )
}

export default Navbar