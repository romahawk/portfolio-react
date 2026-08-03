import { ArrowRight } from "lucide-react";
import TypewriterTitle from "./common/TypewriterTitle.jsx";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import About from "./About.jsx";
import { useTranslation } from "../context/LangContext.jsx";
import { deText, localizeGermanValue } from "../locales/germanCopy.js";

const aboutArtifact = {
  inputLabel: "Background",
  outputLabel: "Operating model",
  inputs: [
    { label: "Product & workflow systems", accent: "ai" },
    { label: "AI-assisted delivery", accent: "ai" },
    { label: "Regulated implementation experience", accent: "medtech" },
  ],
  outputs: [
    { label: "Workflow discovery", accent: "ai" },
    { label: "Human-reviewed AI systems", accent: "ai" },
    { label: "Prototype-to-delivery proof", accent: "fullstack" },
  ],
};

const aboutPills = [
  { label: "AI workflow systems", accent: "ai" },
  { label: "Product judgment", accent: "ai" },
  { label: "Full-stack delivery", accent: "fullstack" },
  { label: "Regulated operations proof", accent: "medtech" },
];

export default function AboutPage() {
  const { lang } = useTranslation();
  const title = "I turn messy workflows into practical AI-assisted systems";
  const localizedAboutPills = localizeGermanValue(aboutPills, lang);
  const localizedAboutArtifact = localizeGermanValue(aboutArtifact, lang);

  return (
    <>
      <PageHero
        eyebrow={deText("About", lang)}
        title={<TypewriterTitle text={deText(title, lang)} />}
        subtitle={deText("I help operations-heavy teams turn fragmented processes into practical AI-assisted systems, combining product strategy, workflow analysis, AI automation, and full-stack delivery. My MedTech background adds real-world judgment from regulated, high-friction environments.", lang)}
        primaryCta={{ label: deText("Explore AI Workflows", lang), href: "/ai-workflow", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("View Proof of Work", lang), href: "/fullstack" }}
        scrollTargetId="about"
      >
        <div className="market-page__hero-extra">
          <div className="market-page__pill-list">
            {localizedAboutPills.map((pill) => <FeaturePill accent={pill.accent} key={pill.label}>{pill.label}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="ai"
            title={deText("Background becomes workflow discovery, reviewed AI systems, and delivery proof", lang)}
            {...localizedAboutArtifact}
          />
        </div>
      </PageHero>
      <About />
    </>
  );
}
