import { CalendarCheck } from "lucide-react";
import TypewriterTitle from "./common/TypewriterTitle.jsx";
import { FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import Contact from "./Contact.jsx";
import { useTranslation } from "../context/LangContext.jsx";
import { deText, localizeGermanValue } from "../locales/germanCopy.js";

const contactPills = [
  { label: "Operations-heavy SME", accent: "ai" },
  { label: "MedTech / HealthTech", accent: "medtech" },
  { label: "Post-audit build", accent: "fullstack" },
  { label: "Regulated workflows", accent: "medtech" },
];

export default function ContactPage() {
  const { lang } = useTranslation();
  const title = "Discuss One Workflow Worth Fixing";
  const localizedContactPills = localizeGermanValue(contactPills, lang);

  return (
    <>
      <PageHero
        eyebrow={deText("Contact", lang)}
        title={<TypewriterTitle text={deText(title, lang)} />}
        subtitle={deText("Start an AI Workflow Opportunity Audit, scope a regulated-workflow engagement, or discuss a prototype that turns one fragmented process into a practical system.", lang)}
        primaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request", icon: <CalendarCheck size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("Connect on LinkedIn", lang), href: "https://www.linkedin.com/in/roman-mazuryk/" }}
        visualType="contact"
        scrollTargetId="contact"
      >
        <div className="market-page__hero-extra contact-hero__extra">
          <div className="market-page__pill-list">
            {localizedContactPills.map((pill) => <FeaturePill accent={pill.accent} key={pill.label}>{pill.label}</FeaturePill>)}
          </div>
          <div className="contact-hero__deliverables">
            <p className="contact-hero__deliverables-label">{deText("What an AI Workflow Audit produces", lang)}</p>
            <ul className="contact-hero__deliverables-list">
              <li>{deText("Workflow map with bottleneck annotations", lang)}</li>
              <li>{deText("AI opportunity scorecard — value vs. risk", lang)}</li>
              <li>{deText("Pilot scope with first automation step defined", lang)}</li>
            </ul>
          </div>
        </div>
      </PageHero>
      <Contact />
    </>
  );
}
