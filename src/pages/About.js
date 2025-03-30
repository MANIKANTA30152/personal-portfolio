import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              I'm a passionate 3rd-year Computer Science Engineering student at KL University, specializing in Software Modeling and DevOps. With expertise in full-stack development and cloud technologies, I build innovative solutions to complex problems.
            </p>
            
            <div className="personal-info">
              <h3 className="info-heading">Personal Information</h3>
              <ul className="info-list">
                <li><strong>Name:</strong> Bollapalli Manikanta</li>
                <li><strong>Education:</strong> B.Tech in CSE, KL University</li>
                <li><strong>Specialization:</strong> Software Modeling & DevOps</li>
                <li><strong>Location:</strong> Andhra Pradesh, India</li>
                <li><strong>Email:</strong> 2200030152cser@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-heading">Technical Skills</h3>
            <div className="skills-container">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>DevOps & Cloud</h4>
                <ul>
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;