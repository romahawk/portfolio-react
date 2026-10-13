import { track } from "@vercel/analytics";
import { ArrowRight, Calendar, CheckCircle2, FileDown, XCircle } from "lucide-react";
import { CTAStrip, PageHero } from "../system/SystemVisuals.jsx";
import { contact, services } from "../../content/site.js";
import { ServicesSectionIndex, ServicesSectionRail } from "./ServicesSectionNav.jsx";

// Section ids where a booking click counts as the hero or the closing CTA.
const BOOKING_POSITIONS = { top: "hero", contact: "cta" };

// Clicks are tracked by delegation, so the shared PageHero and CTAStrip stay unchanged.
function handleTrackedClick(event) {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href");
  if (href === contact.calUrl) {
    const section = link.closest("section[id]");
    const position = BOOKING_POSITIONS[section?.id];
    if (position) track("services_book_call", { position });
  } else if (href === services.sample.cta.href) {
    track("services_sample_pdf");
  }
}

function Kicker({ children }) {
  return <p className="services-v2__kicker">{children}</p>;
}

function SectionHead({ kicker, title, id, children }) {
  return (
    <header className="services-v2__head reveal">
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 id={id}>{title}</h2>
      {children}
    </header>
  );
}

function ExternalAttrs(link) {
  return link.external ? { target: "_blank", rel: "noreferrer" } : {};
}

export default function ServicesPage() {
  const { hero, patterns, sample, proof, engagements, guardrails, about, fit, faq, cta } = services;
  const legend = patterns.legend;

  return (
    // Delegated click tracking: the handler only reads which link was clicked.
    <div className="market-page services-v2" onClick={handleTrackedClick}>
      <PageHero
        id="top"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        subtitle={hero.subline}
        primaryCta={{ label: hero.primary.label, href: hero.primary.href, icon: <Calendar size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: hero.secondary.label, href: hero.secondary.href }}
        showScrollCue={false}
      >
        <p className="services-v2__credibility">{hero.credibility.join(" · ")}</p>
        <ServicesSectionIndex nav={services.sectionNav} />
      </PageHero>

      <ServicesSectionRail nav={services.sectionNav} heroId="top" />

      <section id="patterns" className="services-v2__section container" aria-labelledby="patterns-title">
        <SectionHead kicker={patterns.kicker} title={patterns.title} id="patterns-title">
          <p className="services-v2__lead">{patterns.intro}</p>
        </SectionHead>
        <p className="services-v2__legend reveal" aria-hidden="true">
          <span className="services-v2__legend-item services-v2__legend-item--ai">{legend.ai}</span>
          <span className="services-v2__legend-item services-v2__legend-item--rules">{legend.rules}</span>
          <span className="services-v2__legend-item services-v2__legend-item--human">{legend.human}</span>
        </p>
        <div className="services-v2__patterns">
          {patterns.items.map((item) => (
            <article className="services-v2__pattern reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <dl className="services-v2__split">
                <div className="services-v2__split-row services-v2__split-row--ai">
                  <dt>{legend.ai}</dt>
                  <dd>{item.ai}</dd>
                </div>
                <div className="services-v2__split-row services-v2__split-row--rules">
                  <dt>{legend.rules}</dt>
                  <dd>{item.rules}</dd>
                </div>
                <div className="services-v2__split-row services-v2__split-row--human">
                  <dt>{legend.human}</dt>
                  <dd>{item.human}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="services-v2__footnote">{patterns.footnote}</p>
      </section>

      <section id="sample" className="services-v2__section container" aria-labelledby="sample-title">
        <div className="services-v2__sample">
          <div className="services-v2__sample-text reveal">
            <Kicker>{sample.kicker}</Kicker>
            <h2 id="sample-title">{sample.title}</h2>
            <p className="services-v2__lead">
              {sample.text.before}<strong>{sample.text.strong}</strong>{sample.text.after}
            </p>
            <p className="services-v2__label">{sample.label}</p>
            <a className="btn btn--primary" href={sample.cta.href} download>
              {sample.cta.label} <FileDown size={15} className="icon ml-1" aria-hidden="true" />
            </a>
          </div>
          <a className="services-v2__sample-figure reveal" href={sample.image.fullSrc} target="_blank" rel="noreferrer">
            <img
              src={sample.image.src}
              srcSet={sample.image.srcSet}
              sizes={sample.image.sizes}
              alt={sample.imageAlt}
              width={sample.image.width}
              height={sample.image.height}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </section>

      <section id="proof" className="services-v2__section container" aria-labelledby="proof-title">
        <SectionHead kicker={proof.kicker} title={proof.title} id="proof-title" />
        <div className="services-v2__proof">
          {proof.rows.map((row) => (
            <div className="services-v2__proof-row reveal" key={row.label}>
              <p className="services-v2__proof-label">{row.label}</p>
              <div>
                <p>{row.text}</p>
                <p className="services-v2__links">
                  {row.links.map((link) => (
                    <a href={link.href} key={link.href} {...ExternalAttrs(link)}>
                      {link.label} <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="engagements" className="services-v2__section container" aria-labelledby="engagements-title">
        <SectionHead kicker={engagements.kicker} title={engagements.title} id="engagements-title" />
        <div className="services-v2__engagements">
          {engagements.items.map((item) => (
            <article
              className={`services-v2__engagement reveal${item.badge ? " services-v2__engagement--first" : ""}`}
              key={item.title}
            >
              <header>
                <h3>{item.title}</h3>
                {item.badge ? <span className="services-v2__badge">{item.badge}</span> : null}
              </header>
              <dl>
                <div><dt>{engagements.labels.format}</dt><dd>{item.format}</dd></div>
                <div><dt>{engagements.labels.get}</dt><dd>{item.get}</dd></div>
                <div><dt>{engagements.labels.outcome}</dt><dd>{item.outcome}</dd></div>
                <div><dt>{engagements.labels.price}</dt><dd>{item.price}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="guardrails" className="services-v2__section container" aria-labelledby="guardrails-title">
        <SectionHead kicker={guardrails.kicker} title={guardrails.title} id="guardrails-title" />
        <ul className="services-v2__guardrails reveal">
          {guardrails.items.map((item) => (
            <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
          ))}
        </ul>
      </section>

      <section className="services-v2__section container" aria-labelledby="who-title">
        <div className="services-v2__who reveal">
          <img
            src={about.photo.src}
            alt={about.photo.alt}
            className="services-v2__who-photo"
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h2 id="who-title">{about.title}</h2>
            <p className="services-v2__lead">{about.text}</p>
            <p className="services-v2__links">
              <a href={about.link.href}>{about.link.label} <ArrowRight size={14} aria-hidden="true" /></a>
            </p>
          </div>
        </div>
      </section>

      <section className="services-v2__section container" aria-labelledby="fit-title">
        <SectionHead title={fit.title} id="fit-title" />
        <div className="services-v2__fit reveal">
          <div>
            <h3>{fit.goodLabel}</h3>
            <ul>
              {fit.good.map((item) => (
                <li key={item}><CheckCircle2 size={15} className="services-v2__fit-icon--good" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{fit.notIdealLabel}</h3>
            <ul>
              {fit.notIdeal.map((item) => (
                <li key={item}><XCircle size={15} className="services-v2__fit-icon--not" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="services-v2__section container" aria-labelledby="faq-title">
        <SectionHead title={faq.title} id="faq-title" />
        <div className="services-v2__faq reveal">
          {faq.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="services-v2__section container">
        <CTAStrip accent="ai" title={cta.title} text={cta.text} primary={cta.primary} secondary={cta.secondary} />
      </section>
    </div>
  );
}
