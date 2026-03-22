import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <div className="about-text glass-card">
          <p className="about-bio">
            I am a <strong>Lead Engineer at Samsung Research Institute</strong> specializing in Computer Vision, LLMs, and Model Optimization.
          </p>
          <p className="about-bio">
            My work focuses on pushing the boundaries of generative AI and agentic systems, while building production-ready optimization pipelines. I thrive at the intersection of robust engineering and innovative AI research vbcsdfhdgf jhdfjhghgfd ghfddfgh sdhsgfgsg  sfhsgfgsh sfshfgsgfs fsshvfgsvvcsjn sfbhsfhsvvs.
          </p>
        </div>

        <div className="about-skills">
          <div className="skills-container">
            <div className="skill-category glass-card">
              <h3>Languages</h3>
              <div className="skill-list">
                <span className="badge">Python</span>
                <span className="badge">C++</span>
                <span className="badge">MATLAB</span>
              </div>
            </div>

            <div className="skill-category glass-card">
              <h3>Frameworks</h3>
              <div className="skill-list">
                <span className="badge">PyTorch</span>
                <span className="badge">Hugging Face</span>
                <span className="badge">OpenCV</span>
                <span className="badge">scikit-learn</span>
                <span className="badge">NumPy</span>
                <span className="badge">Pandas</span>
              </div>
            </div>

            <div className="skill-category glass-card">
              <h3>Tools & Domains</h3>
              <div className="skill-list">
                <span className="badge">LangChain</span>
                <span className="badge">LangGraph</span>
                <span className="badge">LLMs</span>
                <span className="badge">Generative AI</span>
                <span className="badge">Agentic AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
