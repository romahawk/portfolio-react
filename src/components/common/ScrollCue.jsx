import React from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollCue({ targetId, label = "SCROLL" }) {
  const handleClick = () => {
    if (!targetId) return;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      className="page-hero__scroll-cue"
      onClick={handleClick}
      aria-label={`Scroll to ${targetId || "next section"}`}
    >
      <span>{label}</span>
      <ChevronDown size={18} className="page-hero__scroll-icon" aria-hidden="true" />
    </button>
  );
}
