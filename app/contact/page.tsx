export default function ContactPage() {

  return (
    <>
      {/* Navigation moved to Root layout */}

      {/* Simple Header */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">Get in touch</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:rithsovandara83@gmail.com">rithsovandara83@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-telegram" />
              </div>
              <div className="contact-details">
                <h3>Telegram</h3>
                <a href="https://t.me/imstillalivelol" target="_blank" rel="noopener noreferrer">@imstillalivelol</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone" />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+85599944923">+855 99 944 923</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-section">
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/sovandara1607" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github" />
            </a>
            <a href="mailto:rithsovandara83@gmail.com" className="social-link">
              <i className="fas fa-envelope" />
            </a>
            <a href="https://t.me/imstillalivelol" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-telegram" />
            </a>
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

