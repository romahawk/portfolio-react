import { ArrowRight } from "lucide-react";
import TypewriterTitle from "./common/TypewriterTitle.jsx";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import About from "./About.jsx";

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
  const title = "I turn messy workflows into practical AI-assisted systems";

  return (
    <>
      <PageHero
        eyebrow="About"
        title={<TypewriterTitle text={title} />}
        subtitle="I help operations-heavy teams turn fragmented processes into practical AI-assisted systems, combining product strategy, workflow analysis, AI automation, and full-stack delivery. My MedTech background adds real-world judgment from regulated, high-friction environments."
        primaryCta={{ label: "Explore AI Workflows", href: "/ai-workflow", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "View Proof of Work", href: "/proof-of-work" }}
        scrollTargetId="about"
      >
        <div className="market-page__hero-extra">
          <div className="market-page__pill-list">
            {aboutPills.map((pill) => <FeaturePill accent={pill.accent} key={pill.label}>{pill.label}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="ai"
            title="Background becomes workflow discovery, reviewed AI systems, and delivery proof"
            {...aboutArtifact}
          />
        </div>
      </PageHero>
      <About />
    </>
  );
}
