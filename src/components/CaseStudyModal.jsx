import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function CaseStudyModal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cs-modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="cs-modal__backdrop" onClick={onClose} />
      <div className="cs-modal__panel" role="document">
        <header className="cs-modal__header">
          <h3 className="cs-modal__title">{title}</h3>
          <button className="cs-modal__close" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </header>
        <div className="cs-modal__body">{children}</div>
      </div>
    </div>
  );
}
