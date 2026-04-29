import React from "react";
import { useTranslation } from "../context/LangContext.jsx";

export default function ServicesContextSection() {
  const { t } = useTranslation();
  const proofStats = t("servicesPage.proof.stats");

  return (
    <section id="proof" className="section container services-page__section">
      <div className="services-page__context reveal">
        <div className="services-page__context-copy">
          <p className="services-page__kicker">{t("servicesPage.proof.kicker")}</p>
          <h2>{t("servicesPage.proof.title")}</h2>
          <p>{t("servicesPage.proof.text")}</p>
          {t("servicesPage.proof.text2") && (
            <p className="services-page__context-recognition">{t("servicesPage.proof.text2")}</p>
          )}
        </div>

        <div className="services-page__context-side">
          <div className="services-page__context-grid">
            {(Array.isArray(proofStats) ? proofStats : []).map((stat, index) => (
              <article
                key={stat.value}
                className={`services-page__context-stat${index === 0 ? " services-page__context-stat--featured" : ""}`}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <p className="services-page__context-note">{t("servicesPage.proof.note")}</p>
        </div>
      </div>
    </section>
  );
}
