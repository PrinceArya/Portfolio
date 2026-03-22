import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">Prince <span>Arya</span></a>
      
      <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li>
          <a href="/Resume_Prince_Arya.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
