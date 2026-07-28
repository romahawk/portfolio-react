import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const NAV_LINKS = [
  { label: "AI Solutions", href: "/ai" },
  { label: "MedTech", href: "/medtech" },
  { label: "Full-Stack", href: "/fullstack" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/romahawk", icon: Github },
  { label: "Email", href: "mailto:romazuryk@proton.me", icon: Mail },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const navLinksValue = t("site.footer.navLinks");
  const navLinks = Array.isArray(navLinksValue) ? navLinksValue : NAV_LINKS.map((link) => link.label);

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <a href="/" className="footer__brand" aria-label="ROMAZ home">
            <span className="footer__brand-brace">{"{ }"}</span>
            <span className="footer__brand-name">ROMAZ</span>
            <span className="footer__brand-dot" />
          </a>
          <h2 className="footer__headline">{t("site.footer.headline")}</h2>
          <p className="footer__tagline">{t("site.footer.tagline")}</p>
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
          <p className="footer__col-heading">{t("site.footer.navigation")}</p>
          <ul className="footer__nav">
            {NAV_LINKS.map(({ label, href }, index) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">
                  {navLinks[index] || label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta-col">
          <p className="footer__col-heading">{t("site.footer.focus")}</p>
          <p className="footer__cta-text">{t("site.footer.focusText")}</p>
          <p className="footer__cta-text footer__cta-text--fit">{t("site.footer.bestFit")}</p>
          <a href="/contact" className="footer__cta-btn">
            {t("site.cta.discussRole")} <ArrowUpRight size={14} className="footer__cta-icon" aria-hidden="true" />
          </a>
          <a href="/ai" className="footer__secondary-link">
            {t("site.cta.exploreCollaboration")} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__copy">&copy; {year} {t("site.footer.bottomLeft")}</span>
          <span className="footer__copy">{t("site.footer.bottomRight")}</span>
        </div>
      </div>
    </footer>
  );
}
