import { FileDown, Mail } from "lucide-react";
import { ArtifactMap, FeaturePill, PageHero, RoleFitSection, SectionHeader } from "./system/SystemVisuals.jsx";
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

const aboutRoleGroups = [
  {
    title: "Best-fit roles",
    items: [
      "Technical Product Manager",
      "MedTech Product Manager",
      "Product / Project Manager",
      "Product Operations",
      "Implementation / Solutions roles",
      "Clinical workflow systems roles",
      "AI-assisted workflow / internal tools roles",
    ],
  },
];

const aboutPills = [
  { label: "Technical PM", accent: "ai" },
  { label: "12+ years of system implementation", accent: "medtech" },
  { label: "20+ systems delivered end to end", accent: "fullstack" },
  { label: "GDP, ISO 9001, DICOM, PACS/RIS", accent: "medtech" },
];

export default function AboutPage() {
  const { lang } = useTranslation();
  const title = "Technical PM. 20+ years in regulated industries.";
  const localizedAboutPills = localizeGermanValue(aboutPills, lang);
  const localizedAboutArtifact = localizeGermanValue(aboutArtifact, lang);

  return (
    <>
      <PageHero
        eyebrow={deText("About", lang)}
        title={deText(title, lang)}
        subtitle={deText("I'm Roman, a technical project manager based near Hamburg. I've worked in medical technology, pharma and logistics for over 20 years. For the last 12+ of them I've delivered client-facing system implementations: integrated operating rooms, imaging and PACS/RIS connectivity, and internal logistics systems under GDP and ISO 9001.", lang)}
        primaryCta={{ label: deText("Download CV", lang), href: "/roman-mazuryk-cv.pdf", download: true, icon: <FileDown size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("Email me", lang), href: `mailto:${EMAIL}`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
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
      <section id="about-role-fit" className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Role fit", lang)}
          title={deText("Where this background fits", lang)}
          text={deText("For hiring teams: the roles where MedTech implementation experience, product structure, and AI-assisted delivery combine.", lang)}
        />
        <RoleFitSection groups={aboutRoleGroups} />
      </section>
    </>
  );
}
