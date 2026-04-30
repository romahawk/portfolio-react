import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  ChevronDown,
  CircleAlert,
  Clock3,
  Gauge,
  LineChart,
  PackageCheck,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import ServicesContextSection from "./ServicesContextSection.jsx";

const ICONS = {
  BarChart3,
  Bot,
  CalendarCheck,
  CircleAlert,
  Clock3,
  Gauge,
  LineChart,
  PackageCheck,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
};

const STEP_CONFIG = [
  { icon: "CircleAlert", accent: "rose",    subtitle: "Why it matters"  },
  { icon: "Wrench",      accent: "blue",    subtitle: "Our approach"    },
  { icon: "PackageCheck",accent: "emerald", subtitle: "Your new assets" },
  { icon: "Clock3",      accent: "violet",  subtitle: "Sprint plan"     },
];

const HERO_STEP_CONFIG = [
  { accent: "amber" },
  { accent: "cyan", featured: true },
  { accent: "emerald" },
];

const TRANSITION_CHIPS = [
  { label: "Scope", accent: "cyan" },
  { label: "Ship",  accent: "emerald" },
];

const SITUATION_HREFS = [
  "#lead-generation-website",
  "#workflow-dashboard",
  "#ai-automation-audit",
  "#book-call",
];

const AUDIT_HREF =
  "mailto:romazuryk@proton.me?subject=Website%20%2F%20Workflow%20Audit%20Request";
const BOOK_CALL_HREF =
  "mailto:romazuryk@proton.me?subject=Book%20a%20call%20-%20systems%20pilot";
const CONTACT_HREF =
  "mailto:romazuryk@proton.me?subject=Services%20inquiry";

function ServiceIcon({ name, className = "services-page__icon", size = 20 }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

function ProcessStepCard({ block, index }) {
  const config = STEP_CONFIG[index] || STEP_CONFIG[0];
  const Icon = ICONS[config.icon] || Sparkles;
  return (
    <div className={`services-page__process-step services-page__process-step--${config.accent}`}>
      <div className="services-page__process-step-top">
        <span className="services-page__process-badge">0{index + 1}</span>
        <Icon size={17} className="services-page__process-icon" aria-hidden="true" />
      </div>
      <h4 className="services-page__process-title">{block.label}</h4>
      <p className="services-page__process-subtitle">{config.subtitle}</p>
      <ul className="services-page__process-list">
        {Array.isArray(block.items) && block.items.map((item) => (
          <li key={item} className="services-page__process-item">
            <span className="services-page__process-dot" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ServicesPage = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const overviewItems = t("servicesPage.overview.items");
  const detailItems = t("servicesPage.details.items");
  const selectorCards = t("servicesPage.selector.cards");
  const steps = t("servicesPage.process.steps");
  const heroSignals = t("servicesPage.hero.signals");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHeroScroll = () => {
    document.getElementById("service-details")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="services-page">
      <section id="services" className="services-page__hero">
        <div className="container services-page__hero-inner">
          <div className="services-page__hero-copy reveal">
            <p className="hero__eyebrow">{t("servicesPage.hero.eyebrow")}</p>
            <h1 className="services-page__title">{t("servicesPage.hero.title")}</h1>
            <p className="services-page__lead">{t("servicesPage.hero.subtitle")}</p>
            <p className="services-page__hero-credibility">{t("servicesPage.hero.credibility")}</p>
            <div className="services-page__actions">
              <a href={AUDIT_HREF} className="btn btn--primary">
                <CalendarCheck size={16} className="icon mr-1" />
                {t("servicesPage.cta.audit")}
              </a>
              <a href="#services-overview" className="btn btn--ghost">
                {t("servicesPage.cta.viewSystems")}
                <ArrowRight size={15} className="icon ml-1" />
              </a>
            </div>
            <p className="services-page__hero-microcopy">{t("servicesPage.cta.microCopy")}</p>
          </div>

          <div
            className="services-page__hero-panel reveal reveal--delay-1"
            aria-label={t("servicesPage.hero.panelLabel")}
          >
            {(Array.isArray(heroSignals) ? heroSignals : []).map((signal, idx) => {
              const config = HERO_STEP_CONFIG[idx] || HERO_STEP_CONFIG[0];
              const chip = TRANSITION_CHIPS[idx];
              return (
                <React.Fragment key={signal.label}>
                  <div
                    className={`services-page__signal services-page__signal--${config.accent}${config.featured ? " services-page__signal--featured" : ""}`}
                  >
                    <span className="services-page__signal-step">0{idx + 1}</span>
                    <span className="services-page__signal-label">{signal.label}</span>
                    <strong className="services-page__signal-value">{signal.value}</strong>
                  </div>
                  {chip && (
                    <div className={`services-page__transition-chip services-page__transition-chip--${chip.accent}`}>
                      <span className="services-page__transition-line services-page__transition-line--before" aria-hidden="true" />
                      <span className="services-page__transition-badge">{chip.label}</span>
                      <span className="services-page__transition-line services-page__transition-line--after" aria-hidden="true" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={`services-page__scroll-hint ${scrolled ? "services-page__scroll-hint--hidden" : ""}`}
          onClick={handleHeroScroll}
          aria-label={t("servicesPage.cta.viewSystems")}
        >
          <span>{t("hero.scroll")}</span>
          <ChevronDown size={18} className="services-page__scroll-hint-icon" />
        </button>
      </section>

      <section id="services-overview" className="section container services-page__section">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">{t("servicesPage.overview.kicker")}</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> {t("servicesPage.overview.title")}
          </h2>
          <p>{t("servicesPage.overview.intro")}</p>
        </div>

        <div className="services-page__cards">
          {(Array.isArray(overviewItems) ? overviewItems : []).map((service, index) => (
            <a
              href={`#${service.id}`}
              key={service.id}
              className={`services-page__card services-page__system reveal reveal--delay-${Math.min(index + 1, 3)}`}
            >
              <div className="services-page__system-connector" aria-hidden="true" />
              <ServiceIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="services-page__card-meta">
                <span>{service.timeline}</span>
                <strong>{service.outcome}</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section container services-page__section">
        <div className="services-page__selector-head">
          <p className="services-page__kicker">{t("servicesPage.selector.kicker")}</p>
          <h2 className="services-page__selector-title">{t("servicesPage.selector.title")}</h2>
          <p className="services-page__selector-subtitle">{t("servicesPage.selector.subtitle")}</p>
        </div>
        <div className="services-page__selector-grid">
          {(Array.isArray(selectorCards) ? selectorCards : []).map((card, idx) => (
            <a
              key={card.title}
              href={SITUATION_HREFS[idx]}
              className="services-page__selector-card"
            >
              <span className="services-page__selector-number" aria-hidden="true">0{idx + 1}</span>
              <strong className="services-page__selector-card-title">{card.title}</strong>
              <p className="services-page__selector-card-desc">{card.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="service-details" className="section container services-page__section">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">{t("servicesPage.details.kicker")}</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> {t("servicesPage.details.title")}
          </h2>
        </div>

        <div className="services-page__details">
          {(Array.isArray(detailItems) ? detailItems : []).map((service, index) => (
            <article
              id={service.id}
              key={service.id}
              className={`services-page__detail services-page__system reveal reveal--delay-${Math.min(index + 1, 3)}`}
            >
              <div className="services-page__system-connector" aria-hidden="true" />

              <div className="services-page__detail-title">
                <ServiceIcon name={service.icon} size={18} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.timeline}</p>
                </div>
              </div>

              <div className="services-page__detail-grid">
                <div className="services-page__process-grid">
                  {service.blocks.map((block, blockIndex) => (
                    <React.Fragment key={block.label}>
                      <ProcessStepCard block={block} index={blockIndex} />
                      {blockIndex < service.blocks.length - 1 && (
                        <div className="services-page__process-connector" aria-hidden="true">
                          <ArrowRight size={14} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="services-page__expected">
                  <span>{t("servicesPage.details.expectedLabel")}</span>
                  <strong>{service.expected}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section container services-page__section">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">{t("servicesPage.process.kicker")}</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> {t("servicesPage.process.title")}
          </h2>
        </div>

        <div className="services-page__flow">
          {(Array.isArray(steps) ? steps : []).map((step, index) => (
            <div key={step.title} className="services-page__step">
              <span className="services-page__step-number">0{index + 1}</span>
              <ServiceIcon name={step.icon} className="services-page__step-icon" size={20} />
              <h3>{step.title}</h3>
              <p>{step.desc || step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesContextSection />

      <section id="trust" className="section container services-page__section services-page__trust">
        <div className="services-page__trust-grid reveal">
          <div className="services-page__note">
            <ShieldCheck size={20} className="services-page__icon" aria-hidden="true" />
            <div>
              <p className="services-page__kicker">{t("servicesPage.trust.kicker")}</p>
              <h2>{t("servicesPage.trust.title")}</h2>
              <p>{t("servicesPage.trust.text")}</p>
              <p>{t("servicesPage.trust.text2")}</p>
              {t("servicesPage.trust.text3") && (
                <p className="services-page__trust-closing">{t("servicesPage.trust.text3")}</p>
              )}
            </div>
          </div>

          <div className="services-page__trust-photo">
            <img
              src="/images/profile.jpg"
              alt={t("about.profileAlt")}
              className="services-page__trust-photo-img"
              loading="lazy"
              decoding="async"
              width="320"
              height="320"
            />
          </div>
        </div>
      </section>

      <section id="book-call" className="section container services-page__final">
        <div className="services-page__final-inner reveal">
          <p className="services-page__kicker">{t("servicesPage.final.kicker")}</p>
          <h2>{t("servicesPage.final.title")}</h2>
          <p>{t("servicesPage.final.text")}</p>
          <div className="services-page__actions">
            <a href={BOOK_CALL_HREF} className="btn btn--primary">
              <CalendarCheck size={16} className="icon mr-1" />
              {t("servicesPage.cta.book")}
            </a>
            <a href={CONTACT_HREF} className="btn btn--ghost">
              {t("servicesPage.final.secondary")}
            </a>
          </div>
        </div>
      </section>

      <a href={BOOK_CALL_HREF} className="services-page__sticky-cta">
        <CalendarCheck size={16} aria-hidden="true" />
        {t("servicesPage.cta.book")}
      </a>
    </div>
  );
};

export default ServicesPage;
