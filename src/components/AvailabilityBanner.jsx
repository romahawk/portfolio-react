import React, { useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "availability_banner_dismissed_v1";

export default function AvailabilityBanner() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "true"
  );

  if (dismissed) return null;

  return (
    <div className="availability-banner" role="status" aria-label="Availability status">
      <span className="availability-banner__dot" aria-hidden="true" />
      <p className="availability-banner__text">
        Open to Product Leadership roles &mdash; B2B SaaS, Internal Tools, Regulated Industries
      </p>
      <a
        href="https://www.linkedin.com/in/roman-mazuryk/"
        target="_blank"
        rel="noreferrer"
        className="availability-banner__cta"
      >
        Connect
      </a>
      <button
        className="availability-banner__close"
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, "true");
          setDismissed(true);
        }}
        aria-label="Dismiss availability banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
