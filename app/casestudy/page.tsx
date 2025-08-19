export default function CaseStudyPage() {
  return (
    <>
      {/* Navigation moved to Root layout */}

      <section className="case-study-hero">
        <div className="container">
          <div className="case-study-hero-content">
            <div className="hero-text-section">
              <h1 className="case-study-main-title">CASE STUDY</h1>
              <p className="hero-subtitle">Exploring User-Centered Design Through Academic Projects</p>
            </div>
            <div className="hero-image">
              <img src="/img/casestudy.jpg" alt="Case Study Hero" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-content">
        <div className="container">
          <div className="case-studies-intro">
            <h2 className="case-studies-title">My Case Studies</h2>
          </div>

          <div className="case-study-item">
            <div className="case-study-text">
              <div className="case-study-category">Persona Creation</div>
              <h3 className="case-study-title">Assignment 1</h3>
              <p className="case-study-description">
                This project focuses on the foundational step of understanding users by creating a detailed persona.
              </p>
              <div className="case-study-links">
                <a href="https://www.figma.com/board/6mKDp0wMXRH10ncoI5kvk1/Sovandara_Rith_Persona?t=eUfbtg5vmnTw8swt-6" target="_blank" rel="noopener noreferrer" className="btn-link">
                  <i className="fab fa-figma" />
                </a>
              </div>
            </div>
            <div className="case-study-image">
              <a href="https://www.figma.com/board/6mKDp0wMXRH10ncoI5kvk1/Sovandara_Rith_Persona?t=4WtUHbDdhoiMDS7e-6" target="_blank" rel="noopener noreferrer">
                <img src="/img/ass1.jpg" alt="Assignment 1 - Persona Creation" />
              </a>
            </div>
          </div>

          <div className="case-study-item reverse">
            <div className="case-study-text">
              <div className="case-study-category">User&#39;s POV</div>
              <h3 className="case-study-title">Assignment 2</h3>
              <p className="case-study-description">
                Transforming initial user research and empathy insights into specific POV statements.
              </p>
              <div className="case-study-links">
                <a href="https://www.figma.com/board/sftgwznQ1xH2Z5MQDUMm3f/Sovandara_Rith_POV?t=eUfbtg5vmnTw8swt-6" target="_blank" rel="noopener noreferrer" className="btn-link">
                  <i className="fab fa-figma" />
                </a>
              </div>
            </div>
            <div className="case-study-image">
              <a href="https://www.figma.com/board/sftgwznQ1xH2Z5MQDUMm3f/Sovandara_Rith_POV?t=4WtUHbDdhoiMDS7e-6" target="_blank" rel="noopener noreferrer">
                <img src="/img/ass2.png" alt="Assignment 2 - User's POV" />
              </a>
            </div>
          </div>

          {/* Additional items trimmed for brevity; ported similarly */}

        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p className="contact-description">Interested in collaborating? Reach out!</p>
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

