import React, { useRef, useState } from "react";
import { Copy, Linkedin, Github, Mail, MapPin, Info, CheckCircle } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = "romazuryk@proton.me";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard unavailable
    }
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section container contact">
      <h2 className="section__title reveal">
        <span className="about__chev">&gt;</span> {t("contact.title")}
      </h2>

      <div className="contact__grid">
        <div className="contact__panel reveal reveal--delay-1">
          <h3 className="contact__subtitle">{t("contact.subtitle")}</h3>
          <p className="contact__text">{t("contact.para1")}</p>
          <p className="contact__text">
            <strong>{t("contact.para2label")}</strong> {t("contact.para2text")}
          </p>

          <div className="contact__info">
            <div className="contact__row">
              <span className="contact__label">
                <Mail size={16} className="icon mr-1" /> {t("contact.emailLabel")}
              </span>
              <div className="contact__value">
                <button className="link-like" onClick={copyEmail} title="Copy email">
                  {email} <Copy size={14} className="icon ml-1" />
                </button>
                <span className={`contact__copied ${copied ? "is-visible" : ""}`} aria-live="polite">
                  {copied ? t("contact.copied") : ""}
                </span>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__label">
                <MapPin size={16} className="icon mr-1" /> {t("contact.locationLabel")}
              </span>
              <span className="contact__value">{t("contact.location")}</span>
            </div>

            <div className="contact__row">
              <span className="contact__label">{t("contact.socialLabel")}</span>
              <div className="contact__socials">
                <a href="https://www.linkedin.com/in/roman-mazuryk/" target="_blank" rel="noreferrer" className="contact__social">
                  <Linkedin size={16} className="icon" /> LinkedIn
                </a>
                <a href="https://github.com/romahawk" target="_blank" rel="noreferrer" className="contact__social">
                  <Github size={16} className="icon" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="contact__form reveal reveal--delay-2" noValidate>
          <div className="field">
            <label htmlFor="name">{t("contact.nameLabel")}</label>
            <input id="name" name="name" type="text" required placeholder={t("contact.namePlaceholder")} />
          </div>

          <div className="field">
            <label htmlFor="email">{t("contact.emailFieldLabel")}</label>
            <input id="email" name="email" type="email" required placeholder={t("contact.emailFieldPlaceholder")} />
          </div>

          <div className="field field--full">
            <label htmlFor="message">{t("contact.messageLabel")}</label>
            <textarea id="message" name="message" rows="6" required placeholder={t("contact.messagePlaceholder")} />
          </div>

          <p className="contact__hint">
            <Info size={13} className="icon mr-1" />
            {t("contact.hint")}
          </p>

          <div className="contact__actions">
            <button type="submit" className="btn btn--primary">{t("contact.submitBtn")}</button>
            <a className="btn btn--ghost" href={`mailto:${email}`}>{t("contact.emailDirectBtn")}</a>
          </div>

          <p className={`contact__submitted ${submitted ? "is-visible" : ""}`} aria-live="polite">
            <CheckCircle size={14} className="icon mr-1" />
            {t("contact.submitted")}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
