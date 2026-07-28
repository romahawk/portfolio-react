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
        eyebrow="About"
        title="Operator, Product Thinker, and AI-Enhanced Builder"
        subtitle="I combine MedTech implementation experience, product/project management, AI automation, and full-stack development to build practical workflow systems."
        primaryCta={{ label: "Explore MedTech Proof", href: "/medtech", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.contact"), href: "/contact" }}
        scrollTargetId="about"
      />
      <About />
    </>
  );
}
