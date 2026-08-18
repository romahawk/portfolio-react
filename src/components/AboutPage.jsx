import { Mail } from "lucide-react";
import TypewriterTitle from "./common/TypewriterTitle.jsx";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import About from "./About.jsx";
import { useTranslation } from "../context/LangContext.jsx";
import { deText, localizeGermanValue } from "../locales/germanCopy.js";

const EMAIL = "romazuryk@proton.me";

const aboutArtifact = {
  inputLabel: "What I bring",
  outputLabel: "What I build",
  inputs: [
    { label: "MedTech field experience", accent: "medtech" },
    { label: "Product & workflow thinking", accent: "ai" },
    { label: "AI-assisted development", accent: "fullstack" },
  ],
  outputs: [
    { label: "Workflow audits & maps", accent: "ai" },
    { label: "Internal tools & prototypes", accent: "fullstack" },
    { label: "Reviewed AI systems", accent: "ai" },
  ],
};

const aboutPills = [
  { label: "Technical PM", accent: "ai" },
  { label: "10+ years MedTech", accent: "medtech" },
  { label: "AI-assisted builds", accent: "fullstack" },
  { label: "Operator background", accent: "medtech" },
];

export default function AboutPage() {
  const { lang } = useTranslation();
  const title = "Technical PM. Operator background. AI-assisted delivery.";
  const localizedAboutPills = localizeGermanValue(aboutPills, lang);
  const localizedAboutArtifact = localizeGermanValue(aboutArtifact, lang);

  return (
    <>
      <PageHero
        eyebrow={deText("About", lang)}
        title={<TypewriterTitle text={deText(title, lang)} />}
        subtitle={deText("I'm a Technical PM with 10+ years in MedTech implementation — OR integration, clinical equipment handover, multi-stakeholder coordination. That background now drives how I design and build practical AI workflow systems.", lang)}
        primaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("Download CV", lang), href: "/roman-mazuryk-cv.pdf" }}
        scrollTargetId="about"
      >
        <div className="market-page__hero-extra">
          <div className="market-page__pill-list">
            {localizedAboutPills.map((pill) => <FeaturePill accent={pill.accent} key={pill.label}>{pill.label}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="ai"
            title={deText("Operator experience becomes workflow audits, prototypes, and reviewed AI systems", lang)}
            {...localizedAboutArtifact}
          />
        </div>
      </PageHero>
      <About />
    </>
  );
}
