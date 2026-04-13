import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects Showcase</h2>

      <div className="projects-grid">
        {/* Featured Project */}
        <div className="project-card featured glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="project-content" style={{ maxWidth: '900px', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', gap: '1.5rem' }}>
              <img src={`${import.meta.env.BASE_URL}figs/Projects/NTIRE_2026_competition.png`} alt="NTIRE Challenge Logo" style={{ maxHeight: '90px', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.1))' }} />
              <h3 className="project-title" style={{ margin: 0, fontSize: '2.2rem' }}>NTIRE 2026: Efficient Burst HDR & Restoration</h3>
            </div>
            <p className="project-desc" style={{ textAlign: 'center', fontSize: '1.1rem', margin: '0 auto 2rem auto', maxWidth: '800px' }}>
              Developed a multi-stage pipeline for the NTIRE 2026 challenge to merge 9 RAW frames into a single high-quality HDR RGB image. The architecture utilizes a Pyramid Cross-Attention Alignment (PCAA) module for spatial alignment, a Multi-Scale Gated Module (MSGM) for adaptive feature combination, and a SplitterNet based model for HDR reconstruction.
              <br /><br />
              Achieved validation scores of <strong>PSNR 39.45</strong> and <strong>SSIM 0.97</strong>. The method outperforms baseline models while maintaining an extremely low parameter count (3.3M) and computational efficiency (0.087 TFLOPs), validating its suitability for on-device mobile deployment.
            </p>
            <div className="project-tech" style={{ justifyContent: 'center' }}>
              <span className="badge">Computer Vision</span>
              <span className="badge">PyTorch</span>
              <span className="badge">HDR Fusion</span>
              <span className="badge">Vision Transformer</span>
              <span className="badge">Cross-Attention</span>
            </div>
          </div>
        </div>

        {/* Regular Projects */}
        <div className="project-card glass-card">
          <div className="project-content">
            <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              LLM Gallery
            </h3>
            <p className="project-desc">
              Developed an interactive web application to visualize and demystify the fundamental architectural blocks of open-source Large Language Models. Built via advanced Agentic Workflows, the platform comprehensively exhibits core structural components ranging from Tokenizers to intricate Prefill and Decode validation phases.
            </p>
            <div className="project-tech">
              <span className="badge">Large Language Models</span>
              <span className="badge">Agentic AI</span>
              <span className="badge">Transformer Architecture</span>
              <span className="badge">Generative AI</span>
            </div>
            <div className="project-links" style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem' }}>
              <a href="https://princearya.github.io/LLM_Gallery/" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.95rem' }}>Live Demo</a>
              <a href="https://github.com/PrinceArya/LLM_Gallery" target="_blank" rel="noopener noreferrer" className="cta-btn secondary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.95rem' }}>Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card glass-card">
          <div className="project-content">
            <h3 className="project-title">Jarvis: Assistant</h3>
            <p className="project-desc">
              Developed a 3D CNN for pixel-level classification using high-resolution satellite imagery, achieving an F1 score of 0.985 (in collaboration with ISM & ISRO). Applied PCA to improve computational efficiency.
            </p>
            <div className="project-tech">
              <span className="badge">Small Language Model</span>
              <span className="badge">SLM Trainning</span>
              <span className="badge">Transformer</span>
            </div>
          </div>
        </div>

        <div className="project-card glass-card">
          <div className="project-content">
            <h3 className="project-title">Horticultural Plantation Classification</h3>
            <p className="project-desc">
              Developed a 3D CNN for pixel-level classification using high-resolution satellite imagery, achieving an F1 score of 0.985 (in collaboration with ISM & ISRO). Applied PCA to improve computational efficiency.
            </p>
            <div className="project-tech">
              <span className="badge">3D CNN</span>
              <span className="badge">PCA</span>
              <span className="badge">Satellite Imagery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
