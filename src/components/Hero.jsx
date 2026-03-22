import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">AI Engineer</span>
          <h1 className="hero-title">Prince Arya</h1>
          
          <p className="hero-location">
            📍 Bengaluru, Karnataka, India
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="cta-btn">View My Work</a>
            <a href="mailto:aryaprince246@gmail.com" className="cta-btn secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/figs/Prince_arya_logo/logo.png" alt="Prince Arya Logo" className="hero-logo-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
