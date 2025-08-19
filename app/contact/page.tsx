"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<null | "sending" | "sent">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/trpc/contact.submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          input: payload,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus(null);
      alert("Failed to send. Please try again.");
    }
  }

  return (
    <>
      {/* Navigation moved to Root layout */}

      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-main-title">Contact Me</h1>
            <p className="contact-subtitle">Any question or remarks? Just write us a message!</p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-card code-card">
            <div className="contact-info-panel">
              <div className="contact-info-content">
                <h2>Contact Information</h2>
                <p>Say something to start a live chat!</p>
                <div className="contact-details">
                  <div className="contact-item"><i className="fas fa-phone" /><span>+855 99 944 923</span></div>
                  <div className="contact-item"><i className="fas fa-envelope" /><span>rithsovandara83@gmail.com</span></div>
                  <div className="contact-item"><i className="fab fa-telegram" /><span>@imstillalivelol</span></div>
                  <div className="contact-item"><i className="fas fa-map-marker-alt" /><span>Phnom Penh, Cambodia</span></div>
                </div>
                <div className="social-links">
                  <a className="social-link" href="https://github.com/sovandara1607" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
                  <a className="social-link" href="mailto:rithsovandara83@gmail.com" aria-label="Email"><i className="fas fa-envelope" /></a>
                  <a className="social-link" href="https://t.me/imstillalivelol" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><i className="fab fa-telegram" /></a>
                </div>
              </div>
              <div className="contact-decoration">
                <div className="decoration-circle circle-1" />
                <div className="decoration-circle circle-2" />
                <div className="decoration-circle circle-3" />
              </div>
            </div>

            <div className="contact-form-panel">
              <div className="header">
                <h2>Send Message via Email & Telegram</h2>
                <p className="form-subtitle">Your message will be sent to both my email and Telegram for faster response</p>
              </div>
              <form className="contact-form" onSubmit={onSubmit}>
                {/* <p className="code-label"><span className="kw">let</span> <span className="id">Email</span> <span className="eq">=</span></p> */}
                {/* <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div> */}
                {/* <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div> */}
                {/* <p className="code-label"><span className="kw">let</span> <span className="id">password</span> <span className="eq">=</span></p> */}
                <div className="form-group full-width">
                  <label>Select Subject?</label>
                  <div className="radio-group">
                    <label className="radio-option"><input type="radio" name="subject" value="general" defaultChecked /><span className="radio-custom" />General Inquiry</label>
                    <label className="radio-option"><input type="radio" name="subject" value="project" /><span className="radio-custom" />Project Inquiry</label>
                    <label className="radio-option"><input type="radio" name="subject" value="collaboration" /><span className="radio-custom" />Collaboration</label>
                    <label className="radio-option"><input type="radio" name="subject" value="other" /><span className="radio-custom" />Other</label>
                  </div>
                </div>
                <p className="code-label"><span className="kw">Type</span> <span className="id">your message here</span> <span className="eq">=</span></p>
                <div className="form-group full-width">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" placeholder="Write your message..." required />
                </div>
                <button type="submit" className="submit-btn">
                  {status === "sending" ? "Sending to Email & Telegram..." : status === "sent" ? "Sent Successfully!" : "Send Message"}
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="additional-contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p className="contact-description">I&apos;m currently looking for new opportunities that allow me to continue learning and grow.</p>
            <div className="contact-cta">
              <a href="mailto:rithsovandara83@gmail.com" className="btn btn-primary"><i className="fas fa-envelope" />Email Me Directly</a>
            </div>
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

