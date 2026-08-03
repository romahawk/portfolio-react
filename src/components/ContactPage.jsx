import { CalendarCheck, BriefcaseBusiness } from "lucide-react";
import TypewriterTitle from "./common/TypewriterTitle.jsx";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import Contact from "./Contact.jsx";
import { useTranslation } from "../context/LangContext.jsx";
import { deText, localizeGermanValue } from "../locales/germanCopy.js";

const contactArtifact = {
  inputLabel: "Intent",
  outputLabel: "Next path",
  inputs: [
    { label: "Workflow audit", accent: "ai" },
    { label: "Automation pilot", accent: "fullstack" },
    { label: "Prototype idea", accent: "fullstack" },
  ],
  outputs: [
    { label: "Focused scope", accent: "ai" },
    { label: "Proof route", accent: "medtech" },
    { label: "Implementation conversation", accent: "fullstack" },
  ],
};

const contactPills = [
  { label: "AI Workflow Audit", accent: "ai" },
  { label: "One workflow to automate", accent: "ai" },
  { label: "Prototype sprint", accent: "fullstack" },
  { label: "Regulated operations", accent: "medtech" },
];

export default function ContactPage() {
  const { lang } = useTranslation();
  const title = "Discuss One Workflow to Automate";
  const localizedContactPills = localizeGermanValue(contactPills, lang);
  const localizedContactArtifact = localizeGermanValue(contactArtifact, lang);

  return (
    <>
      <PageHero
        eyebrow={deText("Contact", lang)}
        title={<TypewriterTitle text={deText(title, lang)} />}
        subtitle={deText("Use this page to start an AI Workflow Opportunity Audit, scope an automation pilot, or discuss a prototype that turns one fragmented process into a practical system.", lang)}
        primaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request", icon: <CalendarCheck size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("Choose Contact Path", lang), href: "#contact", icon: <BriefcaseBusiness size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="contact"
        scrollTargetId="contact"
      >
        <div className="market-page__hero-extra contact-hero__extra">
          <div className="market-page__pill-list">
            {localizedContactPills.map((pill) => <FeaturePill accent={pill.accent} key={pill.label}>{pill.label}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="ai"
            title={deText("Contact intent becomes audit scope, pilot path, or proof route", lang)}
            {...localizedContactArtifact}
          />
        </div>
      </PageHero>
      <Contact />
    </>
  );
}
