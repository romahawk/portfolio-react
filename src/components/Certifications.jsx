import React from "react";
import { GraduationCap, Database, Projector } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const CERT_ICONS = [<Projector size={20} />, <GraduationCap size={20} />, <Database size={20} />];
const CERT_LINKS = [null, null, "https://app.datacamp.com/learn/career-tracks/associate-ai-engineer-for-developers"];
const CERT_IMAGES = ["/images/certs/goit-pm.jpg", "/images/certs/goit-neoversity.jpg", null];
const CERT_STATUS = [null, "ongoing", "ongoing"];

const Certifications = () => {
  const { t } = useTranslation();
  const items = t("certifications.items");

  return (
    <section id="certifications" className="section container">
      <h2 className="section__title reveal">&gt; {t("certifications.title")}</h2>

      <div className="certs__grid">
        {Array.isArray(items) && items.map((cert, idx) => {
          const isPlaceholder = !CERT_IMAGES[idx];
          const delay = idx === 1 ? " reveal--delay-1" : idx === 2 ? " reveal--delay-2" : "";

          return (
            <div key={idx} className={`cert-card reveal${delay}`}>
              <div className="cert-card__head">
                <span className="cert-card__icon">{CERT_ICONS[idx]}</span>
                <h3 className="cert-card__title">{cert.title}</h3>
              </div>

              {isPlaceholder ? (
                <div className="cert-card__ph">
                  <span className="cert-card__ph-label">{t("certifications.inProgress")}</span>
                </div>
              ) : (
                <img
                  src={CERT_IMAGES[idx]}
                  alt={cert.title}
                  className="cert-card__img"
                  loading="lazy"
                />
              )}

              <p className="cert-card__issuer">{cert.issuer}</p>

              {CERT_LINKS[idx] ? (
                <a href={CERT_LINKS[idx]} target="_blank" rel="noreferrer">
                  {t("certifications.viewCredential")}
                </a>
              ) : null}

              {CERT_STATUS[idx] === "ongoing" && (
                <span className="badge badge--ongoing">{t("certifications.ongoing")}</span>
              )}

              <p className="cert-card__summary">{cert.summary}</p>

              {Array.isArray(cert.stack) && cert.stack.length > 0 && (
                <ul className="cert-card__stack">
                  {cert.stack.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
