import React from "react";
import { Linkedin, Github, FileDown } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import PageHero from "./common/PageHero.jsx";
import TypewriterTitle from "./common/TypewriterTitle.jsx";

const Hero = () => {
  const { t } = useTranslation();
  const title = t("site.home.hero.title");

  return (
    <PageHero
      id="home"
      eyebrow={t("site.home.hero.eyebrow")}
      title={<TypewriterTitle text={title} />}
      subtitle={t("site.home.hero.subtitle")}
      primaryCta={{ label: t("site.cta.viewProof"), href: "/proof-of-work" }}
      secondaryCta={{ label: t("site.cta.exploreAiWorkflows"), href: "/ai-workflow" }}
      tertiaryCta={{ label: t("site.cta.workWithMe"), href: "/collaborate" }}
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
