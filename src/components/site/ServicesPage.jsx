import { ArrowRight, CheckCircle2, Mail, XCircle } from "lucide-react";
import { CTAStrip, PageHero, SectionHeader } from "../system/SystemVisuals.jsx";
import { services } from "../../content/site.js";

export default function ServicesPage() {
  const { hero, problem, offers, labels, process, proof, fit, cta } = services;

  return (
    <div className="market-page market-page--ai market-page--services">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.headline}
        subtitle={hero.subline}
        primaryCta={{ label: hero.primary.label, href: hero.primary.href, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: hero.secondary.label, href: hero.secondary.href }}
        scrollTargetId="problem"
      />

      <section id="problem" className="section container market-page__section">
        <SectionHeader title={problem.title} text={problem.text} headingAccent="ai" />
        <div className="ai-before-after reveal">
          <div className="ai-before-after__panel ai-before-after__panel--before">
            <span className="ai-before-after__label">{problem.beforeLabel}</span>
            <ul>{problem.before.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="ai-before-after__arrow" aria-hidden="true">
            <ArrowRight size={22} />
          </div>
          <div className="ai-before-after__panel ai-before-after__panel--after">
            <span className="ai-before-after__label">{problem.afterLabel}</span>
            <ul>{problem.after.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="offers" className="section container market-page__section">
        <SectionHeader title={services.offersTitle} />
        <div className="ai-offer-grid services-offer-grid">
          {offers.map((offer, index) => (
            <article className={`ai-offer-card ${index === 0 ? "ai-offer-card--featured" : ""} reveal`} key={offer.title}>
              {offer.badge ? (
                <header className="ai-offer-card__header">
                  <span className="ai-offer-card__badge">{offer.badge}</span>
                </header>
              ) : null}
              <h3>{offer.title}</h3>
              <dl>
                <div><dt>{labels.get}</dt><dd>{offer.get}</dd></div>
                <div><dt>{labels.duration}</dt><dd>{offer.duration}</dd></div>
                <div><dt>{labels.outcome}</dt><dd>{offer.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section container market-page__section">
        <SectionHeader title={services.processTitle} />
        <div className="ai-process-timeline">
          {process.map((step, index) => (
            <article className="ai-process-step reveal" key={step.title}>
              <span className="ai-process-step__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="ai-process-step__body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="section container market-page__section">
        <SectionHeader title={proof.title} text={proof.text} />
        <p className="home-services-link">
          {proof.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label} <ArrowRight size={14} aria-hidden="true" />
            </a>
          ))}
        </p>
      </section>

      <section id="fit" className="section container market-page__section">
        <SectionHeader title={services.fitTitle} />
        <div className="ai-fit-grid reveal">
          <article className="ai-fit-card ai-fit-card--good">
            <h3>{labels.good}</h3>
            <ul>
              {fit.good.map((item) => (
                <li key={item}><CheckCircle2 size={15} className="ai-fit-icon ai-fit-icon--good" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </article>
          <article className="ai-fit-card ai-fit-card--not">
            <h3>{labels.notIdeal}</h3>
            <ul>
              {fit.notIdeal.map((item) => (
                <li key={item}><XCircle size={15} className="ai-fit-icon ai-fit-icon--not" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="section container market-page__section">
        <CTAStrip accent="ai" title={cta.title} text={cta.text} primary={cta.primary} secondary={cta.secondary} />
      </section>
    </div>
  );
}
