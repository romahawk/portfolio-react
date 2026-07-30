import { CalendarCheck, BriefcaseBusiness } from "lucide-react";
import { ArtifactMap, FeaturePill, PageHero } from "./system/SystemVisuals.jsx";
import Contact from "./Contact.jsx";

const contactArtifact = {
  inputLabel: "Intent",
  outputLabel: "Next path",
  inputs: ["Workflow audit", "Automation pilot", "Prototype idea"],
  outputs: ["Focused scope", "Proof route", "Implementation conversation"],
};

const contactPills = ["AI Workflow Audit", "One workflow to automate", "Prototype sprint", "Regulated operations"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss One Workflow to Automate"
        subtitle="Use this page to start an AI Workflow Opportunity Audit, scope an automation pilot, or discuss a prototype that turns one fragmented process into a practical system."
        primaryCta={{ label: "Book an AI Workflow Audit", href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request", icon: <CalendarCheck size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Choose Contact Path", href: "#contact", icon: <BriefcaseBusiness size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="contact"
        scrollTargetId="contact"
      >
        <div className="market-page__hero-extra">
          <div className="market-page__pill-list">
            {contactPills.map((pill) => <FeaturePill accent="ai" key={pill}>{pill}</FeaturePill>)}
          </div>
          <ArtifactMap
            accent="ai"
            title="Contact intent becomes audit scope, pilot path, or proof route"
            {...contactArtifact}
          />
        </div>
      </PageHero>
      <Contact />
    </>
  );
}
