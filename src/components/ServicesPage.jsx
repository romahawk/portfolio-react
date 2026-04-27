import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
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
  CheckCircle2,
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

const DETAIL_BLOCK_ICONS = [
  { icon: "CircleAlert", bulletIcon: "CircleAlert" },
  { icon: "Wrench", bulletIcon: "Wrench" },
  { icon: "PackageCheck", bulletIcon: "CheckCircle2" },
  { icon: "Clock3", bulletIcon: "Clock3" },
];

const BOOK_CALL_HREF =
  "mailto:romazuryk@proton.me?subject=Book%20a%20call%20-%20systems%20pilot";
const CONTACT_HREF =
  "mailto:romazuryk@proton.me?subject=Services%20inquiry";

function ServiceIcon({ name, className = "services-page__icon", size = 20 }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

function BulletList({ items, icon = "CheckCircle2" }) {
  if (!Array.isArray(items)) return null;
  const Icon = ICONS[icon] || CheckCircle2;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Icon size={15} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailBlock({ block, index }) {
  const iconConfig = DETAIL_BLOCK_ICONS[index] || DETAIL_BLOCK_ICONS[0];

  return (
    <div className="services-page__detail-block">
      <h4>
        <ServiceIcon
          name={iconConfig.icon}
          className="services-page__detail-block-icon"
          size={15}
        />
        <span>{block.label}</span>
      </h4>
      <BulletList items={block.items} icon={iconConfig.bulletIcon} />
    </div>
  );
}

const ServicesPage = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const overviewItems = t("servicesPage.overview.items");
  const detailItems = t("servicesPage.details.items");
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
            <div className="services-page__actions">
              <a href={BOOK_CALL_HREF} className="btn btn--primary">
                <CalendarCheck size={16} className="icon mr-1" />
                {t("servicesPage.cta.diagnosis")}
              </a>
              <a href="#service-details" className="btn btn--ghost">
                {t("servicesPage.cta.viewSystems")}
                <ArrowRight size={15} className="icon ml-1" />
              </a>
            </div>
          </div>

          <div
            className="services-page__hero-panel reveal reveal--delay-1"
            aria-label={t("servicesPage.hero.panelLabel")}
          >
            {(Array.isArray(heroSignals) ? heroSignals : []).map((signal) => (
              <div key={signal.label} className="services-page__signal">
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
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
                {service.blocks.map((block, blockIndex) => (
                  <DetailBlock key={block.label} block={block} index={blockIndex} />
                ))}

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
