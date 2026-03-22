import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <div className="about-text glass-card">
          <p className="about-bio">
            I am a Lead Engineer at Samsung Research Institute specializing in Computer Vision, Large Language Models (LLMs), and Model Optimization.
          </p>
          <p className="about-bio">
            In my current role, I drive the deployment of LLMs for edge devices, leveraging advanced quantization, pruning, and knowledge distillation
            techniques to strictly minimize latency and memory footprints. Throughout my tenure at Samsung, I have consistently focused on bridging the
            gap between cutting-edge research and real-world commercial application. I have spearheaded the end-to-end design and on-device deployment of
            numerous camera imaging algorithms—most notably, a comprehensive Multi-Frame solution for the 24MP camera pipeline and advanced Tone Mapping
            techniques—which have been successfully integrated into Samsung's flagship devices. Beyond my technical work, I am a passionate photographer
            who loves to capture the unique stories of the people and places I encounter along the way.
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
