import React from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "./common/PageHero.jsx";
import About from "./About.jsx";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="MEDTECH IMPLEMENTATION / PRODUCT SYSTEMS / AI-ASSISTED DELIVERY"
        title="From MedTech implementation to product and workflow systems"
        subtitle="My background is in real-world MedTech implementation: operating room systems, hospital stakeholders, equipment handover, and operational coordination. Today I translate that experience into product concepts, workflow systems, and AI-assisted delivery."
        primaryCta={{ label: "View Proof of Work", href: "/proof-of-work", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
        scrollTargetId="about"
      />
      <About />
    </>
  );
}
