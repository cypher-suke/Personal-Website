import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="footer-left">© {new Date().getFullYear()} Jarrel Whitmore</span>

        <div className="footer-center">
          <a href="https://linkedin.com/in/your-profile" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/your-username" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:you@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

        <div className="footer-right">
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
