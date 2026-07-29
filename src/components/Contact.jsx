import React, { useState } from "react";
import { Copy, Linkedin, Github, Mail, MapPin, BriefcaseBusiness, CalendarCheck, Code2 } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
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

  return (
    <section id="contact" className="section container contact">
      <h2 className="section__title reveal">
        <span className="about__chev">&gt;</span> {t("site.contact.details.title")}
      </h2>

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

        <div className="contact__paths contact__paths--stack reveal reveal--delay-2" aria-label="Contact paths">
          <a href="mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request" className="contact__path">
            <CalendarCheck size={18} aria-hidden="true" />
            <strong>I need AI workflow automation</strong>
            <span>Workflow audit, automation sprint, SOP system, dashboard, or internal tool prototype.</span>
          </a>
          <a href="mailto:romazuryk@proton.me?subject=MedTech%20Product%20%2F%20Project%20Role" className="contact__path">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            <strong>I am hiring for a MedTech / Product / Project role</strong>
            <span>Product, project, implementation, product ops, or workflow ownership roles.</span>
          </a>
          <a href="mailto:romazuryk@proton.me?subject=Full-Stack%20Prototype%20Discussion" className="contact__path">
            <Code2 size={18} aria-hidden="true" />
            <strong>I want to discuss a full-stack prototype or collaboration</strong>
            <span>Product prototypes, dashboards, workflow tools, APIs, and AI-assisted build work.</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
