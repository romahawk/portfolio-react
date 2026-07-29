import { ArrowRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import About from "./About.jsx";

const aboutArtifact = {
  inputLabel: "Background",
  outputLabel: "Operating model",
  inputs: ["MedTech implementation", "Product / project ownership", "AI-assisted delivery"],
  outputs: ["Workflow systems", "Structured handover", "Product proof"],
};

const aboutPills = ["Operator context", "Workflow states", "Product logic", "AI-assisted build"];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Operator, Product Thinker, and AI-Enhanced Builder"
        subtitle="I combine MedTech implementation experience, product/project management, AI automation, and full-stack development to build practical workflow systems."
        primaryCta={{ label: "Explore MedTech Proof", href: "/medtech", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.contact"), href: "/contact" }}
        scrollTargetId="about"
      >
        <div className="market-page__hero-extra">
          <div className="market-page__pill-list">
            {aboutPills.map((pill) => <FeaturePill accent="medtech" key={pill}>{pill}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="medtech"
            title="MedTech implementation and product ownership become workflow systems"
            {...aboutArtifact}
          />
        </div>
      </PageHero>
      <About />
    </>
  );
}
