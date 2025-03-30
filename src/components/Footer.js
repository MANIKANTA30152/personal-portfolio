// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Social Links Section */}
        <div className="footer__social-section">
          <h3 className="footer__social-heading">SOCIAL</h3>
          <div className="footer__social-icons">
            <a 
              href="https://linkedin.com/in/bollapalli-manikanta-67935b28b" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social-link"
            >
              <FaLinkedin className="footer__social-icon" />
            </a>
            <a 
              href="https://github.com/MANIKANTA30152" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer__social-link"
            >
              <FaGithub className="footer__social-icon" />
            </a>
            <a 
              href="https://www.codechef.com/users/klu_220030152" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="CodeChef"
              className="footer__social-link"
            >
              <SiCodechef className="footer__social-icon" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer__divider"></div>

        {/* Copyright Section */}
        <div className="footer__copyright">
          © Copyright {new Date().getFullYear()}. Made by {' '}
          <a 
            href="https://linkedin.com/in/bollapalli-manikanta-67935b28b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__name-link"
          >
            Bollapalli Manikanta
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;