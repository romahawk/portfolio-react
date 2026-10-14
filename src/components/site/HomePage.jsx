import { ArrowRight, FileDown, Linkedin } from "lucide-react";
import { CTAStrip, PageHero, SectionHeader } from "../system/SystemVisuals.jsx";
import ProofCaseCard from "../common/ProofCaseCard.jsx";
// Homepage v3 renders Hero, Work, About and Contact only. The credibility strip (facts),
// otherBuilds, delivery and aiTeaser stay in site.js but are not rendered here.
import {
  about,
  cases,
  contact,
  contactSection,
  education,
  experience,
  identity,
  labels,
  languages,
  location,
  work,
} from "../../content/site.js";

function TextLink({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {children} <ArrowRight size={14} aria-hidden="true" />
    </a>
  );
}

// The experience timeline animates from the oldest role (bottom) up to the
// newest: each circle lights up when the connector below it finishes drawing.
const MILESTONE_START_MS = 200;
const MILESTONE_TOTAL_MS = 1400;

function milestoneTiming(index, count) {
  const step = MILESTONE_TOTAL_MS / Math.max(count - 1, 1);
  const fromBottom = count - 1 - index;
  return {
    "--milestone-delay": `${Math.round(MILESTONE_START_MS + step * fromBottom)}ms`,
    "--milestone-step": `${Math.round(step)}ms`,
    "--segment-delay": `${Math.round(MILESTONE_START_MS + step * (fromBottom - 1))}ms`,
  };
}

export default function HomePage() {
  return (
    <div className="market-page market-page--home">
      <PageHero
        id="top"
        eyebrow={identity.eyebrow}
        title={identity.name}
        titleLine={identity.role}
        subtitle={identity.subtitle}
        primaryCta={{ label: labels.downloadCv, href: contact.cvUrl, download: true, icon: <FileDown size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: labels.linkedin, href: contact.linkedin, external: true, icon: <Linkedin size={15} className="icon ml-1" aria-hidden="true" /> }}
        scrollTargetId="work"
      />

      <section id="work" className="section container market-page__section">
        <SectionHeader title={work.title} text={work.intro} />
        <div className="medtech-proof-grid">
          {cases.map((item, index) => <ProofCaseCard item={item} index={index} key={item.title} />)}
        </div>
      </section>

      <section id="about" className="section container market-page__section">
        <SectionHeader title={about.title} />
        <div className="home-about">
          <div className="home-about__text reveal">
            <img
              src={about.photo.src}
              alt={about.photo.alt}
              className="home-about__photo"
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
            />
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="home-about__side">
            <article className="home-about__card reveal">
              <h3>{about.experienceTitle}</h3>
              <ol className="home-experience">
                {experience.map((item, index) => (
                  <li
                    key={item.role}
                    style={milestoneTiming(index, experience.length)}
                  >
                    <strong>{item.role}</strong>
                    <span className="home-experience__meta">{item.org} · {item.dates}</span>
                    <span>{item.line}</span>
                  </li>
                ))}
              </ol>
            </article>
            <article className="home-about__card reveal">
              <h3>{about.factsTitle}</h3>
              <dl className="home-facts">
                {[education, languages, location].map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section container market-page__section">
        <CTAStrip
          accent="medtech"
          title={contactSection.title}
          text={contactSection.text}
          primary={{ label: labels.downloadCv, href: contact.cvUrl }}
          secondary={{ label: labels.emailMe, href: contact.emailHref }}
        />
        <p className="home-services-link">
          <TextLink href={contact.linkedin}>{labels.linkedin}</TextLink>
        </p>
      </section>
    </div>
  );
}
