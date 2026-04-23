import React from "react";
import { useTranslation } from "../context/LangContext.jsx";

const Results = () => {
  const { t } = useTranslation();
  const tiles = t("results.tiles");

  return (
    <section id="results" className="section container results">
      <h2 className="section__title reveal">
        <span className="about__chev">&gt;</span> {t("results.title")}
      </h2>
      <p className="about__text reveal">{t("results.intro")}</p>

      <div className="results__grid">
        {Array.isArray(tiles) && tiles.map((tile, i) => (
          <div
            key={i}
            className={`result-tile${i === 1 ? " result-tile--featured" : ""} reveal${i < 3 ? ` reveal--delay-${i + 1}` : ""}`}
          >
            {/* TODO: replace placeholder metrics with final verified numbers */}
            <span className="result-tile__metric">{tile.metric}</span>
            <p className="result-tile__label">{tile.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
