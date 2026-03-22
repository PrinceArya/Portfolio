import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-layout" style={{ display: 'flex', gap: '4rem', alignItems: 'stretch', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto', flexWrap: 'wrap' }}>
        
        <div className="exp-side-logo" style={{ flex: '1 1 250px', maxWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'sticky', top: 'var(--nav-height)' }}>
          <img src={`${import.meta.env.BASE_URL}figs/Prince_arya_logo/logo_2.png`} alt="Experience Logo" style={{ width: '100%', height: 'auto', minHeight: '300px', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.15))' }} />
        </div>

        <div className="experience-timeline" style={{ flex: '2 1 600px', margin: 0 }}>
          
          {/* Lead Engineer */}
          <div className="timeline-item glass-card" style={{ marginBottom: '2rem' }}>
            <div className="timeline-dot"></div>
            <div className="exp-content">
              <div className="exp-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="exp-title">Lead Engineer</h3>
                  <span className="exp-company">Samsung Research Institute, Bangalore</span>
                  <span className="exp-date">March 2026 - Present</span>
                </div>
              </div>
              <ul className="exp-details">
                <li>Driving the deployment of Large Language Models for edge devices utilizing advanced quantization, pruning, and knowledge distillation techniques to minimize latency and memory footprint.</li>
                <li>Led the development of a high-efficiency solution for the CVPR NTIRE Efficient Burst HDR & Restoration challenge, achieving the fastest runtime and securing 5th place.</li>
              </ul>
            </div>
          </div>

          {/* Senior Engineer */}
          <div className="timeline-item glass-card" style={{ marginBottom: '2rem' }}>
            <div className="timeline-dot"></div>
            <div className="exp-content">
              <div className="exp-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="exp-title">Senior Engineer</h3>
                  <span className="exp-company">Samsung Research Institute, Bangalore</span>
                  <span className="exp-date">March 2023 - Feb 2026</span>
                </div>
              </div>
              <ul className="exp-details">
                <li>Spearheaded the end-to-end design, implementation, and on-device deployment of the 24MP imaging pipeline for flagship devices.</li>
                <li>Developed patch-based Multi-Exposure Fusion algorithm with novel well-exposedness metric, outperforming SOTA methods: 3× lower memory usage, 25% faster computation (parallel processing of each patch), and real-time optimization for Samsung S-series Imaging pipeline.</li>
                <li>Developed and optimized a commercialization-ready fusion algorithm for Bayer and Tetra Color Filter Array (CFA), enabling high-quality demosaiced output with enhanced detail, color accuracy, and noise reduction, ensuring seamless integration into camera imaging pipelines.</li>
                <li>Achieved "AI-Expert" proficiency through Samsung's Workera examination.</li>
              </ul>
            </div>
          </div>

          {/* Engineer (Advanced Developer) */}
          <div className="timeline-item glass-card">
            <div className="timeline-dot"></div>
            <div className="exp-content">
              <div className="exp-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="exp-title">Engineer (Advanced Developer)</h3>
                  <span className="exp-company">Samsung Research Institute, Bangalore</span>
                  <span className="exp-date">Aug 2022 - Feb 2023</span>
                </div>
              </div>
              <ul className="exp-details">
                <li>Resolved 250+ customer-facing issues through PLMs/VOCs, including issue handling, debugging, and resolution. Aligned with customer needs while optimizing the user experience for Expert Raw and high-resolution camera pipelines.</li>
                <li>Developed a deep, practical understanding of multi-frame imaging pipelines and the integration of associated ISP algorithms to align with user needs.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
