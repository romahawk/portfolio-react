import React, { useRef, useState } from "react";
import { Copy, Linkedin, Github, FileDown, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const email = "romazuryk@proton.me"; // change to your email
  const location = "Germany (CET)";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const name = fd.get("name") || "";
    const from = fd.get("email") || "";
    const message = fd.get("message") || "";
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${from}>\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    formRef.current.reset();
  };

  return (
    <section id="contact" className="section container contact">
      <h2 className="section__title">
        <span className="about__chev">&gt;</span> Contact
      </h2>

      <div className="contact__grid">
        <div className="contact__panel">
          <h3 className="contact__subtitle">Let’s work together</h3>
          <p className="contact__text">
            I’m open to React/Full-Stack roles and IT PM opportunities—especially
            where tech meets healthcare. Reach out and I’ll reply quickly.
          </p>

          <div className="contact__info">
            <div className="contact__row">
              <span className="contact__label"><Mail size={16} className="icon mr-1" /> Email</span>
              <div className="contact__value">
                <button className="link-like" onClick={copyEmail} title="Copy email">
                  {email} <Copy size={14} className="icon ml-1" />
                </button>
                <span className={`contact__copied ${copied ? "is-visible" : ""}`}>Copied!</span>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__label"><MapPin size={16} className="icon mr-1" /> Location</span>
              <span className="contact__value">{location}</span>
            </div>

            <div className="contact__row">
              <span className="contact__label">Social</span>
              <div className="contact__socials">
                <a href="https://www.linkedin.com/in/roman-mazuryk/" target="_blank" rel="noreferrer" className="contact__social">
                  <Linkedin size={16} className="icon" /> LinkedIn
                </a>
                <a href="https://github.com/romahawk" target="_blank" rel="noreferrer" className="contact__social">
                  <Github size={16} className="icon" /> GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="contact__social">
                  <FileDown size={16} className="icon" /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="contact__form" noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>

          <div className="field field--full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required placeholder="How can I help?" />
          </div>

          <div className="contact__actions">
            <button type="submit" className="btn btn--primary">Send</button>
            <a className="btn btn--ghost" href={`mailto:${email}`}>Open mail app</a>
          </div>

          <p className="contact__hint">
            No server required—this form opens your email client with the message.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
