import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [hoveredImg, setHoveredImg] = useState(null);
  // Images are in public/figs/Hobby/img_1.jpg to img_9.jpg
  const images = Array.from({ length: 9 }, (_, i) => `${import.meta.env.BASE_URL}figs/Hobby/img_${i + 1}.jpg`);

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Photography</h2>

      <div className="gallery-grid">
        {images.map((imgSrc, index) => (
          <div 
            key={index} 
            className="gallery-item glass-card" 
            style={{ padding: 0 }}
            onMouseEnter={() => setHoveredImg(imgSrc)}
            onMouseLeave={() => setHoveredImg(null)}
          >
            <img src={imgSrc} alt={`Photography ${index + 1}`} loading="lazy" />
            <div className="gallery-overlay"></div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.75rem 1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }}
           onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
           onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          For more captures visit 
          <a href="https://www.instagram.com/senspture/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#E1306C', fontWeight: 'bold' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Senspture
          </a>
        </p>
      </div>

      {hoveredImg && (
        <div className="full-frame-preview">
          <div className="full-frame-preview-card">
            <img src={hoveredImg} alt="Card preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
