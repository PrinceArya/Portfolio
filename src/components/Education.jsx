import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-layout" style={{ display: 'flex', gap: '4rem', alignItems: 'stretch', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto', flexWrap: 'wrap-reverse' }}>
        
        <div className="education-card glass-card" style={{ flex: '2 1 600px', margin: 0, display: 'flex', alignItems: 'center' }}>
          <div className="edu-content" style={{ width: '100%' }}>
            <h3 className="edu-degree">B.Tech. in Electronics and Communication Engineering</h3>
            <span className="edu-university">Indian Institute of Technology (ISM), Dhanbad</span>
            <div className="edu-meta">
              <span className="edu-date">Aug 2018 - May 2022</span>
              <span className="edu-gpa">GPA: 9.0/10</span>
            </div>
          </div>
        </div>
        
        <div className="edu-side-logo" style={{ flex: '1 1 250px', maxWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/figs/Prince_arya_logo/logo_3.png" 
            alt="Education Logo" 
            style={{ width: '100%', height: '100%', minHeight: '200px', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.15))', transition: 'transform 0.3s ease' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Education;
