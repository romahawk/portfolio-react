import { CalendarCheck, BriefcaseBusiness } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import Contact from "./Contact.jsx";

const contactArtifact = {
  inputLabel: "Intent",
  outputLabel: "Next path",
  inputs: ["AI workflow", "MedTech role", "Prototype idea"],
  outputs: ["Focused email", "Proof route", "Working conversation"],
};

const contactPills = ["AI audit", "MedTech roles", "Product prototype", "Workflow discussion"];

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Work With Me"
        subtitle="Choose the path that fits: AI workflow automation, MedTech product/project roles, or full-stack prototype collaboration."
        primaryCta={{ label: "Choose Contact Path", href: "#contact", icon: <BriefcaseBusiness size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.startAudit"), href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request", icon: <CalendarCheck size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="contact"
        scrollTargetId="contact"
      >
        <div className="market-page__hero-extra">
          <div className="market-page__pill-list">
            {contactPills.map((pill) => <FeaturePill accent="ai" key={pill}>{pill}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="ai"
            title="Contact intent becomes the right collaboration path"
            {...contactArtifact}
          />
        </div>
      </PageHero>
      <Contact />
    </>
  );
}
