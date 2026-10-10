import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { CTAStrip, FeaturePill, PageHero, SectionHeader, StatusBadge } from "../system/SystemVisuals.jsx";
import ProofCaseCard from "../common/ProofCaseCard.jsx";
import {
  about,
  cases,
  contact,
  contactSection,
  delivery,
  education,
  experience,
  facts,
  identity,
  labels,
  languages,
  location,
  otherBuilds,
  work,
} from "../../content/site.js";

function TextLink({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children} <ArrowRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="market-page market-page--home">
      <PageHero
        id="top"
        eyebrow={identity.eyebrow}
        title={identity.headline}
        subtitle={identity.subline}
        primaryCta={{ label: labels.downloadCv, href: contact.cvUrl, download: true, icon: <FileDown size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: labels.emailMe, href: contact.emailHref, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        metaLinks={[
          { label: "LinkedIn", href: contact.linkedin, external: true, icon: <Linkedin size={14} aria-hidden="true" /> },
          { label: "GitHub", href: contact.github, external: true, icon: <Github size={14} aria-hidden="true" /> },
        ]}
        scrollTargetId="work"
      >
        <p className="home-hero__meta-line">{identity.metaLine}</p>
        <ul className="market-page__pill-list home-credibility" aria-label={labels.keyFacts}>
          {facts.map((fact) => <li key={fact}><FeaturePill accent="medtech">{fact}</FeaturePill></li>)}
        </ul>
      </PageHero>

      <section id="work" className="section container market-page__section">
        <SectionHeader title={work.title} text={work.intro} />
        <div className="medtech-proof-grid">
          {cases.map((item, index) => <ProofCaseCard item={item} index={index} key={item.title} />)}
        </div>

        <h3 className="other-builds__title">{work.otherBuildsTitle}</h3>
        <ul className="other-builds">
          {otherBuilds.map((build) => (
            <li className="other-build reveal" key={build.title}>
              <StatusBadge status={build.status} />
              <strong>{build.title}</strong>
              <p>{build.line}</p>
              <TextLink href={build.url}>{build.title}</TextLink>
            </li>
          ))}
        </ul>
        <p className="home-delivery-note">
          <TextLink href={delivery.noteLink.href}>{labels.howIWorkWithAi}</TextLink>
        </p>
      </section>

      <section id="delivery" className="section container market-page__section">
        <SectionHeader title={delivery.title} />
        <div className="medtech-capability-grid">
          {delivery.steps.map((step) => (
            <article className="medtech-capability-card reveal" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className="home-delivery-note reveal">
          {delivery.note}{" "}
          <TextLink href={delivery.noteLink.href}>{delivery.noteLink.label}</TextLink>
        </p>
      </section>

      <section id="about" className="section container market-page__section">
        <SectionHeader title={about.title} />
        <div className="home-about">
          <div className="home-about__text reveal">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="home-about__side">
            <article className="home-about__card reveal">
              <h3>{about.experienceTitle}</h3>
              <ol className="home-experience">
                {experience.map((item) => (
                  <li key={item.role}>
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
          <TextLink href={contact.linkedin}>LinkedIn</TextLink>
          <TextLink href="/services">{labels.seeServices}</TextLink>
        </p>
      </section>
    </div>
  );
}
