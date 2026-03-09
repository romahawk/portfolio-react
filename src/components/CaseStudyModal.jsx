import React, { useEffect, useRef, useState } from "react";
import { X, Link2, Check } from "lucide-react";

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function CaseStudyModal({ open, onClose, title, slug, children }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Reset copied state when modal closes
  useEffect(() => { if (!open) setCopied(false); }, [open]);

  function handleCopyLink() {
    navigator.clipboard.writeText(`https://www.mazuryk.dev/projects/${slug}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  // Escape key + focus trap
  useEffect(() => {
    if (!open) return;

    // Store focus to restore on close
    previousFocusRef.current = document.activeElement;

    // Auto-focus close button
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
      // Restore focus to the element that opened the modal
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cs-modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="cs-modal__backdrop" onClick={onClose} />
      <div className="cs-modal__panel" ref={panelRef} role="document">
        <header className="cs-modal__header">
          <h3 className="cs-modal__title">{title}</h3>
          <div className="cs-modal__actions">
            {slug && (
              <button
                className="cs-modal__share"
                onClick={handleCopyLink}
                aria-label="Copy shareable link"
                aria-live="polite"
              >
                {copied ? <Check size={15} /> : <Link2 size={15} />}
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>
            )}
            <button ref={closeRef} className="cs-modal__close" aria-label="Close" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </header>
        <div className="cs-modal__body">
          {children}
        </div>
      </div>
    </div>
  );
}
