import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import PageHero from "./common/PageHero.jsx";
import About from "./About.jsx";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("site.about.hero.eyebrow")}
        title={t("site.about.hero.title")}
        subtitle={t("site.about.hero.subtitle")}
        primaryCta={{ label: t("site.cta.viewProof"), href: "/proof-of-work", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.contact"), href: "/contact" }}
        scrollTargetId="about"
      />
      <About />
    </>
  );
}
