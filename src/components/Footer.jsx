import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

// Labels come from the same nav.* keys as the header, so each label always matches its href.
const NAV_LINKS = [
  { labelKey: "nav.aiSolutions", href: "/ai" },
  { labelKey: "nav.medtech", href: "/medtech" },
  { labelKey: "nav.fullstack", href: "/fullstack" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.contact", href: "/contact" },
  { labelKey: "nav.kb", href: "/kb" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/romahawk", icon: Github },
  { label: "Email", href: "mailto:romazuryk@proton.me", icon: Mail },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <a href="/" className="footer__brand" aria-label="ROMAZ home">
            <img src="/images/rm-logo.png" alt="Roman Mazuryk" className="footer__brand-img" />
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
                {React.createElement(icon, { size: 18, "aria-hidden": "true" })}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav-col" aria-label="Footer navigation">
          <p className="footer__col-heading">{t("site.footer.navigation")}</p>
          <ul className="footer__nav">
            {NAV_LINKS.map(({ labelKey, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">
                  {t(labelKey)}
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
