import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",            href: "#home" },
  { label: "About",           href: "#about" },
  { label: "Timeline",        href: "#timeline" },
  { label: "Skills",          href: "#skills" },
  { label: "Product Systems", href: "#projects" },
  { label: "Contact",         href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/romahawk",               icon: Github  },
  { label: "Email",    href: "mailto:romazuryk@proton.me",                icon: Mail    },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__inner">

        {/* Left — brand + tagline + socials */}
        <div className="footer__brand-col">
          <div className="footer__brand">
            <span className="footer__brand-brace">{"{ }"}</span>
            <span className="footer__brand-name">ROMAZ</span>
            <span className="footer__brand-dot" />
          </div>
          <p className="footer__tagline">
            Technical Product Manager &amp; Founder&#8209;Operator.<br />
            Building scalable systems in regulated industries.
          </p>
          <div className="footer__socials">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Centre — navigation */}
        <nav className="footer__nav-col" aria-label="Footer navigation">
          <p className="footer__col-heading">Navigation</p>
          <ul className="footer__nav">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — availability CTA */}
        <div className="footer__cta-col">
          <p className="footer__col-heading">Availability</p>
          <p className="footer__cta-text">
            Open to Technical PM &amp; Product Owner roles and selective founder&#8209;operator collaborations.
          </p>
          <a href="#contact" className="footer__cta-btn">
            Get in touch <ArrowUpRight size={14} className="footer__cta-icon" />
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__copy">© {year} Roman Mazuryk. All rights reserved.</span>
          <span className="footer__copy">Germany (CET) · Available for remote &amp; hybrid</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
