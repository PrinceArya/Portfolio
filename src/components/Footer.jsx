import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="nav-logo">Prince <span>Arya</span></h2>

        <div className="social-links">
          <a href="mailto:aryaprince246@gmail.com" className="social-link" aria-label="Email">
            ✉️
          </a>
          <a href="https://linkedin.com/in/prince-arya-a803a7180" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            🔗
          </a>
        </div>

        <p className="footer-text">
          Designed & Built by <span>Prince Arya</span> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
