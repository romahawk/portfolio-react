import React from "react";
import { ArrowRight, Files, GitBranch, TableProperties } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const PREVIEW_ITEMS = [
  { icon: Files, label: "Scattered documentation" },
  { icon: GitBranch, label: "Operational bottlenecks" },
  { icon: TableProperties, label: "Manual coordination" },
];

export default function AIWorkflowPreview() {
  const { t } = useTranslation();
  const itemsValue = t("site.home.workflowPreview.items");
  const items = Array.isArray(itemsValue) ? itemsValue : PREVIEW_ITEMS.map((item) => item.label);

  return (
    <section id="ai-workflow-preview" className="section container ai-workflow-preview">
      <div className="ai-workflow-preview__panel reveal">
        <div className="ai-workflow-preview__copy">
          <p className="ai-workflow-preview__kicker">{t("site.home.workflowPreview.eyebrow")}</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> {t("site.home.workflowPreview.title")}
          </h2>
          <p>{t("site.home.workflowPreview.text")}</p>
          <a href="/ai-workflow" className="btn btn--primary">
            {t("site.cta.exploreAiWorkflows")} <ArrowRight size={15} className="icon ml-1" />
          </a>
        </div>

        <div className="ai-workflow-preview__stack" aria-label="AI workflow example inputs">
          {PREVIEW_ITEMS.map(({ icon, label }, index) => (
            <div className="ai-workflow-preview__item" key={label}>
              {React.createElement(icon, { size: 18, "aria-hidden": "true" })}
              <span>{items[index] || PREVIEW_ITEMS[index].label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-workflow-preview__company-strip reveal">
        <div>
          <p className="ai-workflow-preview__kicker">{t("site.home.companyStrip.eyebrow")}</p>
          <h3>{t("site.home.companyStrip.title")}</h3>
          <p>{t("site.home.companyStrip.text")}</p>
        </div>
        <div className="ai-workflow-preview__strip-actions">
          <a href="/collaborate" className="btn btn--primary">{t("site.cta.workWithMe")}</a>
          <a href="/ai-workflow" className="btn btn--ghost">{t("site.cta.exploreAiWorkflows")}</a>
        </div>
      </div>
    </section>
  );
}
