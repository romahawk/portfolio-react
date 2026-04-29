import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const NAV_LINK_KEYS = [
  { key: "Results",   href: "#results" },
  { key: "Projects",  href: "#projects" },
  { key: "Services",  href: "#services" },
  { key: "Framework", href: "#framework" },
  { key: "About",     href: "#about" },
  { key: "Contact",   href: "#contact" },
];

const SERVICES_NAV_LINKS = [
  { key: "audit",    href: "#services" },
  { key: "systems",  href: "#services-overview" },
  { key: "packages", href: "#service-details" },
  { key: "process",  href: "#how-it-works" },
  { key: "context",  href: "#proof" },
  { key: "trust",    href: "#trust" },
  { key: "contact",  href: "#book-call" },
];

const AUDIT_HREF = "mailto:romazuryk@proton.me?subject=Website%20%2F%20Workflow%20Audit%20Request";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/romahawk",               icon: Github  },
  { label: "Email",    href: "mailto:romazuryk@proton.me",                icon: Mail    },
];

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const taglineLines = t("footer.tagline").split("\n");
  const isServicesPage =
    typeof window !== "undefined" && window.location.pathname.replace(/\/+$/, "") === "/services";

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
            {(isServicesPage ? SERVICES_NAV_LINKS : NAV_LINK_KEYS).map(({ key, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">
                  {isServicesPage
                    ? t(`footer.servicesNavLinks.${key}`)
                    : (t(`footer.navLinks.${key}`) || key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — availability CTA */}
        <div className="footer__cta-col">
          <p className="footer__col-heading">{t("footer.availability")}</p>
          {isServicesPage ? (
            <>
              <p className="footer__cta-text">{t("footer.availabilityTextServices")}</p>
              <p className="footer__cta-text">{t("footer.availabilityText2Services")}</p>
              <a href={AUDIT_HREF} className="footer__cta-btn">
                {t("footer.requestAudit")} <ArrowUpRight size={14} className="footer__cta-icon" />
              </a>
            </>
          ) : (
            <>
              <p className="footer__cta-text">{t("footer.availabilityText")}</p>
              <p className="footer__cta-text">{t("footer.availabilityText2")}</p>
              <a href="mailto:romazuryk@proton.me" className="footer__cta-btn">
                {t("footer.sendEmail")} <ArrowUpRight size={14} className="footer__cta-icon" />
              </a>
            </>
          )}
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
