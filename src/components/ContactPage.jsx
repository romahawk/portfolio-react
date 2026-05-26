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
        eyebrow={t("site.contact.hero.eyebrow")}
        title={t("site.contact.hero.title")}
        subtitle={t("site.contact.hero.subtitle")}
        primaryCta={{ label: t("site.contact.hero.primary"), href: "#contact", icon: <BriefcaseBusiness size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.startAudit"), href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request", icon: <CalendarCheck size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="contact"
        scrollTargetId="contact"
      />
      <Contact />
    </>
  );
}
