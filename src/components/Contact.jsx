import React, { useRef, useState } from "react";
import { Copy, Linkedin, Github, Mail, MapPin, Info, CheckCircle, BriefcaseBusiness, CalendarCheck } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const bestForItemsValue = t("site.contact.details.bestForItems");
  const bestForItems = Array.isArray(bestForItemsValue) ? bestForItemsValue : [];

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
        <span className="about__chev">&gt;</span> {t("site.contact.details.title")}
      </h2>

      <div className="contact__paths reveal">
        <a href="mailto:romazuryk@proton.me?subject=Role%20Inquiry" className="contact__path">
          <BriefcaseBusiness size={18} aria-hidden="true" />
          <strong>For hiring teams</strong>
          <span>Role fit, product leadership, AI workflow systems, regulated operations.</span>
        </a>
        <a href="mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request" className="contact__path">
          <CalendarCheck size={18} aria-hidden="true" />
          <strong>For business inquiries</strong>
          <span>Start with one workflow audit, discovery sprint, or prototype conversation.</span>
        </a>
      </div>

      <div className="contact__grid">
        <div className="contact__panel reveal reveal--delay-1">
          <h3 className="contact__subtitle">{t("site.contact.details.subtitle")}</h3>
          <p className="contact__text">{t("site.contact.details.text")}</p>
          <p className="contact__text">
            <strong>{t("site.contact.details.bestForLabel")}</strong>
          </p>
          {Array.isArray(bestForItems) ? (
            <ul className="contact__best-for">
              {bestForItems.map((item, index) => (
                <li key={index} className="contact__text">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="contact__text">{t("site.contact.details.note")}</p>
          )}

          <div className="contact__info">
            <div className="contact__row">
              <span className="contact__label">
                <Mail size={16} className="icon mr-1" /> {t("site.contact.details.emailLabel")}
              </span>
              <div className="contact__value">
                <button className="link-like" onClick={copyEmail} title="Copy email">
                  {email} <Copy size={14} className="icon ml-1" />
                </button>
                <span className={`contact__copied ${copied ? "is-visible" : ""}`} aria-live="polite">
                  {copied ? t("site.contact.details.copied") : ""}
                </span>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__label">
                <MapPin size={16} className="icon mr-1" /> {t("site.contact.details.locationLabel")}
              </span>
              <span className="contact__value">{t("site.contact.details.location")}</span>
            </div>

            <div className="contact__row">
              <span className="contact__label">{t("site.contact.details.socialLabel")}</span>
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
            <label htmlFor="name">{t("site.contact.form.nameLabel")}</label>
            <input id="name" name="name" type="text" required placeholder={t("site.contact.form.namePlaceholder")} />
          </div>

          <div className="field">
            <label htmlFor="email">{t("site.contact.form.emailLabel")}</label>
            <input id="email" name="email" type="email" required placeholder={t("site.contact.form.emailPlaceholder")} />
          </div>

          <div className="field field--full">
            <label htmlFor="message">{t("site.contact.form.messageLabel")}</label>
            <textarea id="message" name="message" rows="6" required placeholder={t("site.contact.form.messagePlaceholder")} />
          </div>

          <p className="contact__hint">
            <Info size={13} className="icon mr-1" />
            {t("site.contact.form.hint")}
          </p>

          <div className="contact__actions">
            <button type="submit" className="btn btn--primary">{t("site.contact.form.submit")}</button>
            <a
              className="btn btn--ghost"
              href={`mailto:${email}?subject=AI%20Workflow%20Audit%20Request`}
            >
              {t("site.contact.form.emailDirect")}
            </a>
          </div>

          <p className={`contact__submitted ${submitted ? "is-visible" : ""}`} aria-live="polite">
            <CheckCircle size={14} className="icon mr-1" />
            {t("site.contact.form.submitted")}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
