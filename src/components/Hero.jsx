import React from "react";
import { Linkedin, Github, FileDown } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import PageHero from "./common/PageHero.jsx";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <PageHero
      id="home"
      eyebrow={t("hero.eyebrow")}
      title="MedTech Product & Workflow Systems"
      subtitle="I help MedTech, HealthTech, and regulated operations teams turn complex workflows into structured, auditable systems — combining real implementation experience, product thinking, and AI-assisted discovery, prototyping, documentation, and delivery."
      primaryCta={{ label: "View Proof of Work", href: "/proof-of-work" }}
      secondaryCta={{ label: "Explore AI Workflows", href: "/ai-workflow" }}
      tertiaryCta={{ label: "Work With Me", href: "/collaborate" }}
      visualType="home"
      scrollTargetId="operator-advantage"
      metaLinks={[
        { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-mazuryk/", external: true, icon: <Linkedin size={14} aria-hidden="true" /> },
        { label: "GitHub", href: "https://github.com/romahawk", external: true, icon: <Github size={14} aria-hidden="true" /> },
        { label: t("hero.downloadCV"), href: "/roman-mazuryk-cv.pdf", download: true, icon: <FileDown size={14} aria-hidden="true" /> },
      ]}
    />
  );
};

export default Hero;
