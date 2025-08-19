"use client";

import { useState } from "react";

export default function AboutPage() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const toggleSkills = () => {
    setIsSkillsOpen(prev => !prev);
  };

  const skills = [
    { name: "Next.js", icon: "fab fa-react" },
    { name: "React Native", icon: "fab fa-react" },
    { name: "TypeScript", icon: "fab fa-js-square" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Python", icon: "fab fa-python" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Docker", icon: "fab fa-docker" }
  ];

  return (
    <>
      {/* Navigation moved to Root layout */}

      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-text-section">
              <div className="about-greeting">
                <span className="greeting-badge">
                  <i className="fas fa-hand-wave" />
                  Hello! I am Sovandara
                </span>
              </div>
              <h1 className="about-main-title">Passionate Computer Science Student </h1>
              <p className="about-subtitle">
                I have interest in Software Engineering and Software Development.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">6 months</span>
                  <span className="stat-label">Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Skills Mastered</span>
                </div>
              </div>
            </div>
            <div className="about-image-section">
              <div className="profile-container">
                <img src="/img/pf.jpg" alt="Sovandara Rith" className="profile-img" />
                <div className="profile-decoration">
                  <div className="decoration-dot dot-1" />
                  <div className="decoration-dot dot-2" />
                  <div className="decoration-dot dot-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-header">
              <span className="section-badge">About Me</span>
              <h2 className="story-title">Bridging Technology & Human Experience</h2>
            </div>
            <div className="story-grid">
              <div className="story-text">
                <p className="story-description">
                  I am <strong>Sovandara Rith</strong>, a passionate Computer Science student with a keen interest in
                  <span className="highlight-text">Software Engineering</span>, AI, cybersecurity, and Machine Learning.
                  Currently a sophomore, I enjoy solving complex problems and building innovative solutions that
                  combine technology and creativity.
                </p>
                <p className="story-description">
                  My journey in technology is driven by a strong passion for continuous learning. I&apos;m not only
                  inspired by student engagement but also advocate for student needs, fostering a collaborative
                  academic environment. Balancing my technical expertise with leadership skills, I strive to make
                  positive contributions in my field.
                </p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-graduation-cap" />
                    <div>
                      <h4>Education</h4>
                      <p>Computer Science Sophomore</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-code" />
                    <div>
                      <h4>Focus Areas</h4>
                      <p>Software Engineering & Software Development</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb" />
                    <div>
                      <h4>Passion</h4>
                      <p>Solving Real-World Problems, Building Innovative Solutions, and Learning New Technologies while having fun building apps from scratch.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-visual">
                <div className="visual-card">
                  <div className="card-icon"><i className="fas fa-brain" /></div>
                  <h3>Problem Solver</h3>
                  <p>I love tackling complex challenges and finding innovative solutions</p>
                </div>
                <div className="visual-card">
                  <div className="card-icon"><i className="fas fa-users" /></div>
                  <h3>Team Player</h3>
                  <p>Collaborating with diverse teams to create impactful products</p>
                </div>
                <div className="visual-card">
                  <div className="card-icon"><i className="fas fa-rocket" /></div>
                  <h3>Innovator</h3>
                  <p>Always exploring new technologies and creative approaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hci-passion-section">
        <div className="container">
          <div className="hci-content">
            <div className="hci-text">
              <span className="section-badge">My Passion</span>
              <h2 className="hci-title">Developing <br />Web/Mobile Applications</h2>
              <p className="hci-description">
              I enjoy figuring out how things work and solving complex problems.
              </p>
              <p className="hci-description">
              I like creating something from nothing—apps, websites, and more.
              </p>
              <div className="relative inline-block text-left">
                <button 
                  onClick={toggleSkills}
                  className="skills-toggle"
                >
                  <div className="toggle-content">
                    <i className="fas fa-code toggle-icon" />
                    <span>My Tech Stack</span>
                  </div>
                  <i className={`fas fa-chevron-down chevron-icon ${isSkillsOpen ? 'rotated' : ''}`} />
                </button>

                {isSkillsOpen && (
                  <>
                    <div className="floating-backdrop" onClick={toggleSkills} />
                    <div className="skills-dropdown-menu">
                      <div className="floating-header">
                        <div className="floating-title">
                          <i className="fas fa-code" />
                          <span>My Tech Stack</span>
                        </div>
                        <button className="floating-close" onClick={toggleSkills}>
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <ul className="skills-list">
                        {skills.map((skill, index) => (
                                                  <li 
                          key={index} 
                          className="skill-item"
                        >
                          <i className={skill.icon} />
                          <span>{skill.name}</span>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="hci-visual">
              <div className="hci-graphic">
                <div className="graphic-element element-1" />
                <div className="graphic-element element-2" />
                {/* <div className="graphic-element element-3" /> */}
                <div className="graphic-center">
                  <i className="fas fa-code" />
                  <span>Web/Mobile Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p className="contact-description">I&apos;m currently looking for new opportunities that allow me to continue learning and grow.</p>
            <div className="contact-info"><p>rithsovandara83@gmail.com</p></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sovandara Rith Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

