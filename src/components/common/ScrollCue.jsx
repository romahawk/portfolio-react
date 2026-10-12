import React from "react";
import { ChevronDown } from "lucide-react";
import { labels } from "../../content/site.js";

export default function ScrollCue({ targetId, label }) {
  const cueLabel = label || labels.scroll;
  const handleClick = () => {
    if (!targetId) return;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      className="page-hero__scroll-cue"
      onClick={handleClick}
      aria-label={labels.scrollAria}
    >
      <span>{cueLabel}</span>
      <ChevronDown size={18} className="page-hero__scroll-icon" aria-hidden="true" />
    </button>
  );
}
