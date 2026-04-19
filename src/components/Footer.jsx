import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const NAV_LINK_KEYS = [
  { key: "Home",           href: "#home" },
  { key: "About",          href: "#about" },
  { key: "Timeline",       href: "#timeline" },
  { key: "Skills",         href: "#skills" },
  { key: "Product Systems", href: "#projects" },
  { key: "Contact",        href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/romahawk",               icon: Github  },
  { label: "Email",    href: "mailto:romazuryk@proton.me",                icon: Mail    },
];

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const taglineLines = t("footer.tagline").split("\n");

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
            {taglineLines[0]}
            {taglineLines[1] ? <><br />{taglineLines[1]}</> : null}
          </p>
          <div className="footer__socials">
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
                {React.createElement(icon, { size: 16 })}
              </a>
            ))}
          </div>
        </div>

        {/* Centre — navigation */}
        <nav className="footer__nav-col" aria-label="Footer navigation">
          <p className="footer__col-heading">{t("footer.nav")}</p>
          <ul className="footer__nav">
            {NAV_LINK_KEYS.map(({ key, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">
                  {t(`footer.navLinks.${key}`) || key}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — availability CTA */}
        <div className="footer__cta-col">
          <p className="footer__col-heading">{t("footer.availability")}</p>
          <p className="footer__cta-text">{t("footer.availabilityText")}</p>
          <a href="mailto:romazuryk@proton.me" className="footer__cta-btn">
            {t("footer.sendEmail")} <ArrowUpRight size={14} className="footer__cta-icon" />
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__copy">&copy; {year} Roman Mazuryk. {t("footer.copyright")}</span>
          <span className="footer__copy">{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
