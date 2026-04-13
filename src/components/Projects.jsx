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
              I developed this multi-stage HDR pipeline for the NTIRE 2026 challenge, hosted in association with CVPR. The goal was to efficiently merge 9 RAW frames into a single high-quality HDR RGB image. Our architecture uses a Pyramid Cross-Attention Alignment module to align the spatial frames natively, followed by a SplitterNet-based model for the final reconstruction.
              <br /><br />
              We achieved validation scores of <strong>PSNR 39.45</strong> and <strong>SSIM 0.97</strong>, outperforming the baseline models while keeping the network incredibly lightweight (only 3.3M parameters and 0.087 TFLOPs)—perfectly suited for real-world mobile deployment.
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
              I built this as a fun hobby project to simplify and demystify the foundational blocks of Large Language Models. Built out partially using Agentic Workflows, it serves as an interactive web gallery that breaks down how open-source LLMs actually work under the hood, clearly visualizing components like Tokenizers alongside the Prefill and Decode phases.
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
            <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Jarvis: SLM Assistant
            </h3>
            <p className="project-desc">
              To genuinely understand the complete lifecycle and workflow of an LLM, I built this Small Language Model (SLM) entirely from scratch. Rather than just building a chatbot around an API, I focused heavily on the core, underlying engineering—writing custom tokenization strategies, building the transformer architecture, and running real training loops on open-source conversational datasets.
            </p>
            <div className="project-tech">
              <span className="badge">Small Language Models (SLMs)</span>
              <span className="badge">Custom Model Training</span>
              <span className="badge">Transformers</span>
              <span className="badge">Generative AI</span>
            </div>
            <div className="project-links" style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/PrinceArya/Jarvis" target="_blank" rel="noopener noreferrer" className="cta-btn secondary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.95rem' }}>Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card glass-card">
          <div className="project-content">
            <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Horticultural Plantation Classification
            </h3>
            <p className="project-desc">
              During my internship at the Indian Space Research Organisation (ISRO), I designed a deep learning pipeline to accurately classify horticulture crops and generate detailed area maps utilizing complex hyperspectral satellite imagery. By combining a Hybrid 3D-2D CNN architecture with PCA dimensionality reduction and SMOTE balancing, the framework achieved a rigorous pixel-level F1 score of 0.985.
            </p>
            <div className="project-tech">
              <span className="badge">3D-2D CNN</span>
              <span className="badge">Hyperspectral Imaging</span>
              <span className="badge">PCA</span>
              <span className="badge">Deep Learning</span>
            </div>
            <div className="project-links" style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/PrinceArya/Classification-of-Horticulture-plantations-using-hyperspectral-Images-and-Area-Estimation" target="_blank" rel="noopener noreferrer" className="cta-btn secondary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.95rem' }}>Source Code</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
