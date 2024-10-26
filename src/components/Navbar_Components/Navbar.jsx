import React from 'react';
import './Navbar.css'; 
import ApplyButton from '../Utils/ApplyButton';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <a href="https://www.sarasai.org/" className="logo-link">
        <img
          src="saras_logo.png"
          alt="Saras AI Logo"
          className="logo"
          style={{height: 50, width: 150}}
        />
      </a>

      {/* Links */}
      <div className="nav-links">
        <a href="https://www.sarasai.org/" className="nav-link">Home</a>
        <a href="https://www.sarasai.org/programs" className="nav-link">Programs</a>
        <a href="https://www.sarasai.org/admissions" className="nav-link">Admissions</a>
        <a href="https://www.sarasai.org/about-us" className="nav-link">About us</a>
        <a href="/" className="nav-link">FAQ</a>
        <a href="https://www.sarasai.org/contact-us" className="nav-link">Contact us</a>
      </div>

      {/* Apply Button */}
      <ApplyButton />
    </div>
  );
};

export default Navbar;
