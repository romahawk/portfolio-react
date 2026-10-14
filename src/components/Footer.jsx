import React from "react";
import { Linkedin, Mail, FileDown, ArrowUpRight } from "lucide-react";
import { contact, footer, identity, labels, nav } from "../content/site.js";

// Footer links per homepage v3: LinkedIn, email and CV. Consulting is a small text link in the Contact column.
const SOCIAL_LINKS = [
  { label: labels.linkedin, href: contact.linkedin, icon: Linkedin },
  { label: "Email", href: contact.emailHref, icon: Mail },
  { label: labels.downloadCv, href: contact.cvUrl, icon: FileDown, download: true },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const path = typeof window !== "undefined" ? window.location.pathname.replace(/\/+$/, "") || "/" : "/";
  const isHome = path === "/";

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <a href="/" className="footer__brand" aria-label={`${identity.name} home`}>
            <img src="/images/rm-logo.png" alt={identity.name} className="footer__brand-img" />
          </a>
          <h2 className="footer__headline">{identity.name}</h2>
          <p className="footer__tagline">{identity.footerTagline}</p>
          <div className="footer__socials" aria-label="Social and contact links">
            {SOCIAL_LINKS.map(({ label, href, icon, download }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                download={download || undefined}
                aria-label={label}
                title={label}
              >
                {React.createElement(icon, { size: 18, "aria-hidden": "true" })}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav-col" aria-label="Footer navigation">
          <p className="footer__col-heading">{labels.navigation}</p>
          <ul className="footer__nav">
            {nav.map(({ id, href, label }) => (
              <li key={id || href}>
                <a href={href || (isHome ? `#${id}` : `/#${id}`)} className="footer__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta-col">
          <p className="footer__col-heading">{labels.contact}</p>
          <a href={contact.cvUrl} className="footer__cta-btn" download>
            {labels.downloadCv} <ArrowUpRight size={14} className="footer__cta-icon" aria-hidden="true" />
          </a>
          <a href={contact.emailHref} className="footer__secondary-link">
            {contact.email} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={footer.consulting.href} className="footer__consulting-link">
            {footer.consulting.label}
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__copy">&copy; {year} {identity.name}. {identity.role}.</span>
        </div>
      </div>
    </footer>
  );
}
