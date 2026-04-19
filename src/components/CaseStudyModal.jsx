import React, { useEffect, useRef, useState } from "react";
import { X, Link2, Check } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function CaseStudyModal({ open, onClose, title, slug, sections = [], children }) {
  const { t } = useTranslation();
  const panelRef = useRef(null);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const titleId = slug ? `case-study-title-${slug}` : "case-study-title";

  useEffect(() => { if (!open) setCopied(false); }, [open]);

  function handleCopyLink() {
    navigator.clipboard.writeText(`https://www.mazuryk.dev/projects/${slug}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleTocClick(sectionId) {
    const body = bodyRef.current;
    if (!body) return;

    const target = body.querySelector(`[data-cs-section="${sectionId}"]`);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Escape key + focus trap
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement;

    requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(panel.querySelectorAll(FOCUSABLE));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cs-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="cs-modal__backdrop" onClick={onClose} />
      <div className="cs-modal__panel" ref={panelRef} role="document">
        <header className="cs-modal__header">
          <h3 className="cs-modal__title" id={titleId}>{title}</h3>
          <div className="cs-modal__actions">
            {slug && (
              <button
                className="cs-modal__share"
                onClick={handleCopyLink}
                aria-label={t("modal.copyLinkLabel")}
                aria-live="polite"
              >
                {copied ? <Check size={15} /> : <Link2 size={15} />}
                <span>{copied ? t("modal.copied") : t("modal.share")}</span>
              </button>
            )}
            <button ref={closeRef} className="cs-modal__close" aria-label={t("modal.closeLabel")} onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </header>
        {sections.length > 0 ? (
          <div className="cs-modal__toc-shell">
            <nav className="cs-modal__toc" aria-label="Case study sections">
              <div className="cs-modal__toc-label">{t("modal.onThisPage")}</div>
              <div className="cs-modal__toc-list">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className="cs-modal__toc-link"
                    type="button"
                    onClick={() => handleTocClick(section.id)}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        ) : null}
        <div className="cs-modal__body" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
