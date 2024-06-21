import React from 'react'

import '../styles/Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className = "navbar">
        <ul className="navbar-list">
          <div className = "inside-logo">Inside the Lines</div>
        <li className="navbar-link">
          <Link to="/" className="no-underline">
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/podcasts" className="no-underline">
            Podcasts
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/about" className="no-underline">
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/merchandise" className="no-underline">
            Merchandise
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/join-us" className="no-underline">
            Join Us
          </Link>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar