import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Proof of Work", href: "/proof-of-work" },
  { label: "AI Workflows", href: "/ai-workflow" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Work With Me", href: "/collaborate" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/romahawk", icon: Github },
  { label: "Email", href: "mailto:romazuryk@proton.me", icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <a href="/" className="footer__brand" aria-label="ROMAZ home">
            <span className="footer__brand-brace">{"{ }"}</span>
            <span className="footer__brand-name">ROMAZ</span>
            <span className="footer__brand-dot" />
          </a>
          <h2 className="footer__headline">MedTech Product & Workflow Systems</h2>
          <p className="footer__tagline">
            Real MedTech implementation experience translated into product systems, workflow
            design, and AI-assisted delivery.
          </p>
          <div className="footer__socials" aria-label="Social and contact links">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
              >
                {React.createElement(icon, { size: 16, "aria-hidden": "true" })}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav-col" aria-label="Footer navigation">
          <p className="footer__col-heading">Navigation</p>
          <ul className="footer__nav">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta-col">
          <p className="footer__col-heading">Selective focus</p>
          <p className="footer__cta-text">
            I focus on selected roles and projects where MedTech domain experience, product
            thinking, and workflow systems can create real operational leverage.
          </p>
          <p className="footer__cta-text footer__cta-text--fit">
            Best fit: MedTech product roles, workflow systems, AI-assisted delivery, and regulated
            operations.
          </p>
          <a href="/contact" className="footer__cta-btn">
            Discuss a role or workflow <ArrowUpRight size={14} className="footer__cta-icon" aria-hidden="true" />
          </a>
          <a href="/collaborate" className="footer__secondary-link">
            Explore collaboration options <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__copy">&copy; {year} Roman Mazuryk. MedTech Product & Workflow Systems.</span>
          <span className="footer__copy">Built with React, product thinking, and AI-assisted delivery.</span>
        </div>
      </div>
    </footer>
  );
}
