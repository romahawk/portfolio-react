import React from "react";
import { CalendarCheck, BriefcaseBusiness } from "lucide-react";
import PageHero from "./common/PageHero.jsx";
import Contact from "./Contact.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Talk roles, workflows, or one system worth fixing"
        subtitle="Use the contact path that fits: hiring teams can evaluate role fit, and business teams can start with one workflow audit or prototype conversation."
        primaryCta={{ label: "Contact for Roles", href: "#contact", icon: <BriefcaseBusiness size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Request AI Workflow Audit", href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request", icon: <CalendarCheck size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="contact"
        scrollTargetId="contact"
      />
      <Contact />
    </>
  );
}
