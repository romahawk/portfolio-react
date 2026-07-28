import React from "react";
import { CalendarCheck, BriefcaseBusiness } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
import PageHero from "./common/PageHero.jsx";
import Contact from "./Contact.jsx";

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
      />
      <Contact />
    </>
  );
}
