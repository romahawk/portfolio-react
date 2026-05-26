import React from "react";
import ScrollCue from "./ScrollCue.jsx";

function CtaLink({ cta, fallbackClass }) {
  if (!cta) return null;
  const { label, href, icon, className, external, download, onClick } = cta;
  const classes = className || fallbackClass;

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {label} {icon || null}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
    >
      {label} {icon || null}
    </a>
  );
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  visualType = "none",
  showScrollCue = true,
  scrollTargetId,
  metaLinks = [],
  variant = "default",
  id,
  children,
}) {
  return (
    <section id={id} className={`page-hero page-hero--${variant} page-hero--visual-${visualType}`}>
      <div className="container page-hero__inner">
        <div className="page-hero__content reveal">
          {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero__title">{title}</h1>
          {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}

          {(primaryCta || secondaryCta || tertiaryCta) ? (
            <div className="page-hero__actions">
              <CtaLink cta={primaryCta} fallbackClass="btn btn--primary" />
              <CtaLink cta={secondaryCta} fallbackClass="btn btn--ghost" />
              <CtaLink cta={tertiaryCta} fallbackClass="btn btn--ghost page-hero__tertiary" />
            </div>
          ) : null}

          {metaLinks.length ? (
            <div className="page-hero__meta">
              {metaLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  download={link.download}
                >
                  {link.icon || null}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          ) : null}

          {children ? <div className="page-hero__extra">{children}</div> : null}
        </div>
      </div>

      {showScrollCue && scrollTargetId ? <ScrollCue targetId={scrollTargetId} /> : null}
    </section>
  );
}
