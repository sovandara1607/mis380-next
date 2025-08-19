export default function Home() {
  return (
    <>
      {/* Navigation moved to Root layout */}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-layout">
              <div className="hero-left">
                <div className="intro-badge">
                  <span className="wave">👋</span>
                  <span>Hello! I am Sovandara</span>
                </div>
                <h1 className="hero-title">
                  <span className="title-main">Software</span>
                  <span className="title-highlight">Developer</span>
                  <span className="title-sub">& Problem Solver</span>
                </h1>
                <p className="hero-subtitle">
                  Passionate Computer Science student crafting digital experiences 
                  through innovative software engineering solutions.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years Learning</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Projects Built</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">∞</span>
                    <span className="stat-label">Ideas Brewing</span>
                  </div>
                </div>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">
                    <span>Get in Touch</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                  <a href="/casestudy" className="btn btn-secondary">
                    <span>View Projects</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="hero-right">
                <div className="profile-container">
                  <div className="profile-background"></div>
                  <img src="/img/pf.jpg" alt="Sovandara Rith" className="profile-img" />
                  <div className="profile-badge cs-badge">
                    <i className="fas fa-code"></i>
                    <span>CS Student</span>
                  </div>
                  <div className="profile-badge status-badge">
                    <div className="status-dot"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-description">
              <p>
                I&apos;m a sophomore Computer Science student with a passion for <strong>Software Engineering</strong>, 
                <strong>AI</strong>, and <strong>Cybersecurity</strong>. I love solving complex problems and 
                building innovative solutions that bridge technology and creativity to tackle real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience & Leadership</h2>
            <p className="section-subtitle">Building communities and growing through hands-on involvement</p>
          </div>
          
          <div className="experience-grid">
            <div className="experience-card">
              <div className="card-header">
                <div className="experience-icon">
                  <i className="fas fa-users" />
                </div>
                <div className="card-meta">
                  <span className="duration">2024 - Present</span>
                  <span className="type">Student Council - CS Representative</span>
                </div>
              </div>
              <h3>CS Representative</h3>
              <p className="experience-role">Student Council</p>
              <p className="experience-description">
                Representing Computer Science students in Student Council at Paragon International University, advocating for
                student needs and fostering collaborative academic environment.
              </p>
              <div className="experience-tags">
                <span className="tag">Leadership</span>
                <span className="tag">Communication</span>
                <span className="tag">Advocacy</span>
              </div>
            </div>

            <div className="experience-card">
              <div className="card-header">
                <div className="experience-icon">
                  <i className="fas fa-globe" />
                </div>
                <div className="card-meta">
                  <span className="duration">2023 - 2025</span>
                  <span className="type">Community</span>
                </div>
              </div>
              <h3>Executive Team Member/Logistics Team Member</h3>
              <p className="experience-role">Union of Youth Federations of Cambodia (UYFC)</p>
              <p className="experience-description">
                Coordinating youth fellowship activities and community engagement programs,
                developing leadership skills and building meaningful connections.
              </p>
              <div className="experience-tags">
                <span className="tag">Community</span>
                <span className="tag">Organization</span>
                <span className="tag">Outreach</span>
              </div>
            </div>
          </div>

          <div className="availability-card">
            <div className="availability-content">
              <div className="availability-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="availability-text">
                <h3>Ready for New Opportunities</h3>
                <p>Looking to join a <span className="highlight-link">cross-functional team</span> that values innovation and accessible design</p>
              </div>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available</span>
              </div>
            </div>
          </div>

          <div className="skills-showcase">
            <h3 className="skills-title">Tech Stack & Tools</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Design & Prototyping</h4>
                <div className="skill-icons">
                  <div className="skill-item">
                    <i className="fab fa-figma"></i>
                    <span>Figma</span>
                  </div>
                  {/* <div className="skill-item">
                    <i className="fab fa-sketch"></i>
                    <span>Sketch</span>
                  </div> */}
                </div>
              </div>
              <div className="skill-category">
                <h4>Development</h4>
                <div className="skill-icons">
                  <div className="skill-item">
                    <i className="fab fa-react"></i>
                    <span>Next.js</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-code"></i>
                    <span>tRPC</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-js-square"></i>
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h4>Collaboration</h4>
                <div className="skill-icons">
                  {/* <div className="skill-item">
                    <i className="fab fa-slack"></i>
                    <span>Slack</span>
                  </div> */}
                  <div className="skill-item">
                    <i className="fab fa-discord"></i>
                    <span>Discord</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A showcase of my design and development work</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-image">
                <img src="/img/ass9.png" alt="High-Fi Prototype Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://www.figma.com/design/xh38WcEPtLMCVEmRIZ1VaE/Sovandara_Rith_Prototype?m=auto&t=oICujU0m2llkOaMY-6" 
                       target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-figma"></i>
                      <span>View Prototype</span>
                    </a>
                    <a href="https://www.figma.com/board/6mKDp0wMXRH10ncoI5kvk1/Sovandara_Rith_Persona?t=oICujU0m2llkOaMY-6" 
                       target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      <span>View Details</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>Interactive Prototype Design</h3>
                  <div className="project-badge">Featured</div>
                </div>
                <p className="project-description">
                  High-fidelity interactive prototype built in Figma with advanced user flows, 
                  micro-interactions, and responsive design principles.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Figma</span>
                  <span className="tech-tag">UI/UX</span>
                  <span className="tech-tag">Prototyping</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/img/ass1.jpg" alt="First Portfolio Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://www.figma.com/board/6mKDp0wMXRH10ncoI5kvk1/Sovandara_Rith_Persona?t=oICujU0m2llkOaMY-6" 
                       target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>Portfolio Foundation</h3>
                  <div className="project-badge debut">First Project</div>
                </div>
                <p className="project-description">
                  My very first web development project - a clean, minimalist portfolio 
                  showcasing fundamental design and coding principles.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML/CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-cta">
            <p>Want to see more of my work?</p>
            <a href="/casestudy" className="btn btn-outline">
              <span>View All Projects</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-content">
              <div className="contact-header">
                <h2 className="section-title">Let&apos;s Build Something Amazing</h2>
                <p className="contact-description">
                  Ready to collaborate on your next project? I&apos;m always excited to work on 
                  innovative solutions and learn from new challenges.
                </p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-content">
                    <h3>Email Me</h3>
                    <a href="mailto:rithsovandara83@gmail.com">rithsovandara83@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="method-content">
                    <h3>Connect on LinkedIn</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer">@rithsovandara</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="method-content">
                    <h3>Check My Code</h3>
                    <a href="https://github.com/sovandara1607" target="_blank" rel="noopener noreferrer">github.com/sovandara1607</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-cta">
                <p className="cta-text">
                  <i className="fas fa-coffee"></i>
                  Coffee chat? Project collaboration? Just want to say hi? I&apos;d love to hear from you!
                </p>
                <div className="response-time">
                  <div className="response-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
            
            <div className="contact-visual">
              <div className="contact-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sovandara Rith Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
