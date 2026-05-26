import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "../../context/LangContext.jsx";

export default function ScrollCue({ targetId, label }) {
  const { t } = useTranslation();
  const cueLabel = label || t("site.scroll");
  const handleClick = () => {
    if (!targetId) return;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      className="page-hero__scroll-cue"
      onClick={handleClick}
      aria-label={t("site.scrollAria")}
    >
      <span>{cueLabel}</span>
      <ChevronDown size={18} className="page-hero__scroll-icon" aria-hidden="true" />
    </button>
  );
}
