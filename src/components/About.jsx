import React from "react";
import { Layers, Target, Users, Dot, ArrowRight, Cpu, GitBranch, Rocket } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section container about">
      <h2 className="about__title reveal">
        <span className="about__chev">&gt;</span> {t("about.title")}
      </h2>

      <div className="about__container">
        <div className="about__row about__row--two-columns reveal reveal--delay-1">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt={t("about.profileAlt")}
              className="about__photo-img"
              loading="lazy"
              decoding="async"
              width="320"
              height="320"
            />
          </div>

          <div className="about__panel">
            <div className="about__eyebrow">{t("about.eyebrow")}</div>
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              {t("about.heading")}
            </h3>

            <p className="about__text">{t("about.para1")}</p>
            <p className="about__text">{t("about.para2")}</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__pillars">
            <div className="about__pillar">
              <Cpu size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">{t("about.pillars.strategy.title")}</h4>
              <p className="about__pillar-text">{t("about.pillars.strategy.text")}</p>
            </div>
            <div className="about__pillar">
              <GitBranch size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">{t("about.pillars.architecture.title")}</h4>
              <p className="about__pillar-text">{t("about.pillars.architecture.text")}</p>
            </div>
            <div className="about__pillar">
              <Rocket size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">{t("about.pillars.execution.title")}</h4>
              <p className="about__pillar-text">{t("about.pillars.execution.text")}</p>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card">
            <div className="about__eyebrow">{t("about.operatingModel.eyebrow")}</div>
            <h3 className="about__heading">
              <Target size={18} className="icon about__icon" />
              {t("about.operatingModel.heading")}
            </h3>
            <p className="about__text">{t("about.operatingModel.text")}</p>
            <ul className="about__principles">
              <li>
                <strong>{t("about.operatingModel.principles.strategy.label")}</strong>{" "}
                {t("about.operatingModel.principles.strategy.text")}
              </li>
              <li>
                <strong>{t("about.operatingModel.principles.architecture.label")}</strong>{" "}
                {t("about.operatingModel.principles.architecture.text")}
              </li>
              <li>
                <strong>{t("about.operatingModel.principles.execution.label")}</strong>{" "}
                {t("about.operatingModel.principles.execution.text")}
              </li>
            </ul>
            <a href="#ai-sdlc" className="btn btn--primary about__framework-cta">
              {t("about.operatingModel.cta")} <ArrowRight size={16} className="icon ml-1" />
            </a>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--cool">
            <div className="about__eyebrow">{t("about.bestFit.eyebrow")}</div>
            <h3 className="about__heading">
              <Users size={18} className="icon about__icon" />
              {t("about.bestFit.heading")}
            </h3>
            <p className="about__text">{t("about.bestFit.para1")}</p>
            <p className="about__text">{t("about.bestFit.para2")}</p>
            <p className="about__text">{t("about.bestFit.para3")}</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--warm">
            <div className="about__eyebrow">{t("about.outside.eyebrow")}</div>
            <h3 className="about__heading">{t("about.outside.heading")}</h3>

            <ul className="about__list">
              <li className="about__list-item">
                <Dot size={16} className="icon about__bullet-icon" />
                <strong>Basketball</strong> - {t("about.outside.basketball")}
              </li>
              <li className="about__list-item">
                <Dot size={16} className="icon about__bullet-icon" />
                <strong>Training &amp; discipline</strong> - {t("about.outside.training")}
              </li>
              <li className="about__list-item">
                <Dot size={16} className="icon about__bullet-icon" />
                <strong>Travel</strong> - {t("about.outside.travel")}
              </li>
            </ul>

            <blockquote className="about__quote">
              <em>{t("about.outside.quote")}</em>
              <div className="about__quote-attribution">{t("about.outside.quoteAttrib")}</div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
