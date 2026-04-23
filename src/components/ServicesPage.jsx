import React from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Gauge,
  LineChart,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const ICONS = {
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Gauge,
  LineChart,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
};

const BOOK_CALL_HREF =
  "mailto:romazuryk@proton.me?subject=Book%20a%20call%20-%20systems%20pilot";

function ServiceIcon({ name, className = "services-page__icon", size = 20 }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

function BulletList({ items }) {
  if (!Array.isArray(items)) return null;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={15} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const ServicesPage = () => {
  const { t } = useTranslation();
  const overviewItems = t("servicesPage.overview.items");
  const detailItems = t("servicesPage.details.items");
  const steps = t("servicesPage.process.steps");
  const proofStats = t("servicesPage.proof.stats");

  return (
    <div className="services-page">
      <section id="services" className="services-page__hero">
        <div className="container services-page__hero-inner">
          <div className="services-page__hero-copy reveal">
            <p className="hero__eyebrow">{t("servicesPage.hero.eyebrow")}</p>
            <h1 className="services-page__title">{t("servicesPage.hero.title")}</h1>
            <p className="services-page__lead">{t("servicesPage.hero.subtitle")}</p>
            <div className="services-page__actions">
              <a href={BOOK_CALL_HREF} className="btn btn--primary">
                <CalendarCheck size={16} className="icon mr-1" />
                {t("servicesPage.cta.book")}
              </a>
              <a href="#how-it-works" className="btn btn--ghost">
                {t("servicesPage.cta.how")}
                <ArrowRight size={15} className="icon ml-1" />
              </a>
            </div>
          </div>

          <div className="services-page__hero-panel reveal reveal--delay-1" aria-label={t("servicesPage.hero.panelLabel")}>
            {(t("servicesPage.hero.signals") || []).map((signal) => (
              <div key={signal.label} className="services-page__signal">
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
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
              className={`services-page__card reveal reveal--delay-${Math.min(index + 1, 3)}`}
            >
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

      <section id="service-details" className="section container services-page__section services-page__details">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">{t("servicesPage.details.kicker")}</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> {t("servicesPage.details.title")}
          </h2>
        </div>

        {(Array.isArray(detailItems) ? detailItems : []).map((service, index) => (
          <article id={service.id} key={service.id} className="services-page__detail reveal">
            <div className="services-page__detail-title">
              <ServiceIcon name={service.icon} size={18} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.timeline}</p>
              </div>
            </div>
            <div className="services-page__detail-grid">
              {service.blocks.map((block) => (
                <div key={block.label} className="services-page__detail-block">
                  <h4>{block.label}</h4>
                  <BulletList items={block.items} />
                </div>
              ))}
              <div className="services-page__expected">
                <span>{t("servicesPage.details.expectedLabel")}</span>
                <strong>{service.expected}</strong>
              </div>
            </div>
            {index < detailItems.length - 1 ? <div className="services-page__divider" aria-hidden="true" /> : null}
          </article>
        ))}
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

      <section id="proof" className="section container services-page__section">
        <div className="services-page__proof reveal">
          <div>
            <p className="services-page__kicker">{t("servicesPage.proof.kicker")}</p>
            <h2>{t("servicesPage.proof.title")}</h2>
            <p>{t("servicesPage.proof.text")}</p>
          </div>
          <div className="services-page__proof-grid">
            {(Array.isArray(proofStats) ? proofStats : []).map((stat) => (
              <div key={stat.value} className="services-page__proof-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="section container services-page__section services-page__trust">
        <div className="services-page__note reveal">
          <ShieldCheck size={20} className="services-page__icon" aria-hidden="true" />
          <div>
            <p className="services-page__kicker">{t("servicesPage.trust.kicker")}</p>
            <h2>{t("servicesPage.trust.title")}</h2>
            <p>{t("servicesPage.trust.text")}</p>
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
            <span>{t("servicesPage.final.secondary")}</span>
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
