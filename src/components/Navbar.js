import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/svg/manikanta.png';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo-container">
          <img 
            src={profileImage} 
            alt="Bollapalli Manikanta" 
            className="header__logo-img"
          />
          <span className="header__logo-sub">BOLLAPALLI MANIKANTA</span>
        </Link>
        <div className="header__links">
          <Link to="/" className="header__link">
            HOME
          </Link>
          <Link to="/about" className="header__link">
            ABOUT
          </Link>
          <Link to="/projects" className="header__link">
            PROJECTS
          </Link>
          <Link to="/resume" className="header__link">
            RESUME
          </Link>
          <Link to="/contact" className="header__link">
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;