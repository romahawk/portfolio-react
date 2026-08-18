import React, { useState } from "react";
import { ArrowRight, Copy, Linkedin, Mail, MapPin, BriefcaseBusiness, CalendarCheck, Code2 } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

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
      <div className="contact__grid">
        <div className="contact__paths contact__paths--stack reveal reveal--delay-1" aria-label="Contact paths">
          <a href="mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request" className="contact__path contact__path--ai">
            <CalendarCheck size={18} aria-hidden="true" />
            <strong>Book an AI Workflow Audit</strong>
            <span>Map one workflow, identify bottlenecks, score AI opportunities, assess risk, and define the first pilot.</span>
            <em>Start audit path <ArrowRight size={14} aria-hidden="true" /></em>
          </a>
          <a href="mailto:romazuryk@proton.me?subject=MedTech%20Workflow%20Discussion" className="contact__path contact__path--medtech">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            <strong>Working in a regulated or MedTech environment?</strong>
            <span>Clinical workflows, implementation handovers, documentation gaps, or stakeholder-heavy coordination that needs structure.</span>
            <em>Select regulated-workflow path <ArrowRight size={14} aria-hidden="true" /></em>
          </a>
          <a href="mailto:romazuryk@proton.me?subject=Full-Stack%20Prototype%20Discussion" className="contact__path contact__path--fullstack">
            <Code2 size={18} aria-hidden="true" />
            <strong>I want to turn a workflow into a working system</strong>
            <span>Prototype sprint, dashboard, internal assistant, workflow tool, API, or deployed custom application.</span>
            <em>Select build path <ArrowRight size={14} aria-hidden="true" /></em>
          </a>
        </div>

        <div className="contact__panel reveal reveal--delay-2">
          <p className="contact__panel-intro">Choose a path on the left, or reach out directly — I'll route the conversation to the right scope.</p>

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
              </div>
            </div>
          </div>
          <p className="contact__response-note">I typically respond within 24–48 hours.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
