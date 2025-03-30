import React from 'react';
import { Link } from 'react-scroll';
import logo from './Logo Image.png'; // Update path if needed
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="Jarrel Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="articles" smooth={true} duration={500}>Articles</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
