import React from "react";
import { Linkedin, Github, Mail, FileDown, ArrowUpRight } from "lucide-react";
import { contact, identity, labels, nav, navServices } from "../content/site.js";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "Email", href: contact.emailHref, icon: Mail },
  { label: labels.downloadCv, href: contact.cvUrl, icon: FileDown, download: true },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const isHome = typeof window !== "undefined" && (window.location.pathname.replace(/\/+$/, "") || "/") === "/";

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
                rel={href.startsWith("http") ? "noreferrer" : undefined}
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
            {nav.map(({ id, label }) => (
              <li key={id}>
                <a href={isHome ? `#${id}` : `/#${id}`} className="footer__nav-link">{label}</a>
              </li>
            ))}
            <li>
              <a href={navServices.href} className="footer__nav-link">{navServices.label}</a>
            </li>
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
