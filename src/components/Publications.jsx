import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <h2 className="section-title">Publications</h2>
      
      <div className="publications-list">
        
        <div className="publication-card glass-card">
          <div className="pub-content">
            <h3 className="pub-title">
              <a href="https://ieeexplore.ieee.org/abstract/document/10889561" target="_blank" rel="noopener noreferrer">
                Redefining Well Exposedness for Locally Adaptive Multi-Exposure Fusion
              </a>
            </h3>
            <span className="pub-conf">Published in ICASSP 2025</span>
            <ul className="pub-details">
              <li>Came out as a result of developing the efficient tonemapping algorithm for Samsung S-series Imaging pipeline.</li>
            </ul>
          </div>
        </div>

        <div className="publication-card glass-card">
          <div className="pub-content">
            <h3 className="pub-title">
              NTIRE 2026 Challenge on Efficient Burst HDR and Restoration: Datasets, Methods, and Results
            </h3>
            <span className="pub-conf">To be published in CVPR 2026 workshop</span>
            <ul className="pub-details">
              <li>Achieved the most optimal solution for the Burst HDR & Restoration challenge in terms of inference time, securing an overall 5th rank.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;
