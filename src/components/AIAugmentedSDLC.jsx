import React from "react";
import {
  Scale,
  GitPullRequestArrow,
  ShieldCheck,
  Gauge,
  Bug,
  BarChart3,
  Bot,
  Globe,
  FileCheck,
  ExternalLink,
} from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const AIAugmentedSDLC = () => {
  const { t } = useTranslation();

  return (
    <section id="framework" className="section container ai-sdlc">
      <h2 className="section__title reveal">
        <span className="about__chev">&gt;</span> {t("aiSdlc.title")}
      </h2>
      <p className="about__text reveal">{t("aiSdlc.intro")}</p>

      <div className="ai-sdlc__badges reveal">
        <span className="ai-sdlc__badge">
          <Globe size={13} /> {t("aiSdlc.badge1")}
        </span>
        <span className="ai-sdlc__badge">
          <FileCheck size={13} /> {t("aiSdlc.badge2")}
        </span>
        <span className="ai-sdlc__badge">
          <ShieldCheck size={13} /> {t("aiSdlc.badge3")}
        </span>
        <span className="ai-sdlc__badge">
          <ShieldCheck size={13} /> {t("aiSdlc.badge4")}
        </span>
      </div>

      <div className="ai-sdlc__cta reveal">
        <a
          href="https://ai-workflow-woad.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          {t("aiSdlc.cta")} <ExternalLink size={14} />
        </a>
      </div>

      <article className="ai-sdlc__panel reveal reveal--delay-1">
        <h3 className="about__heading">
          <Scale size={18} className="icon about__icon" />
          {t("aiSdlc.strategy.heading")}
        </h3>
        <p className="about__text">
          <strong>{t("aiSdlc.strategy.p1label")}</strong> {t("aiSdlc.strategy.p1text")}
        </p>
        <p className="about__text">
          <strong>{t("aiSdlc.strategy.p2label")}</strong> {t("aiSdlc.strategy.p2text")}
        </p>
        <p className="about__text">
          <strong>{t("aiSdlc.strategy.p3label")}</strong> {t("aiSdlc.strategy.p3text")}
        </p>
      </article>

      <article className="ai-sdlc__panel reveal reveal--delay-2">
        <h3 className="about__heading">
          <GitPullRequestArrow size={18} className="icon about__icon" />
          {t("aiSdlc.buildLoop.heading")}
        </h3>
        <p className="about__text">
          <strong>{t("aiSdlc.buildLoop.p1label")}</strong> {t("aiSdlc.buildLoop.p1text")}
        </p>
        <p className="about__text">
          <strong>{t("aiSdlc.buildLoop.p2label")}</strong> {t("aiSdlc.buildLoop.p2text")}
        </p>
        <p className="about__text">
          <strong>{t("aiSdlc.buildLoop.p3label")}</strong> {t("aiSdlc.buildLoop.p3text")}
        </p>
      </article>

      <article className="ai-sdlc__panel reveal reveal--delay-3">
        <h3 className="about__heading">
          <ShieldCheck size={18} className="icon about__icon" />
          {t("aiSdlc.hardening.heading")}
        </h3>
        <div className="ai-sdlc__stack">
          <p className="about__text ai-sdlc__stack-item">
            <Gauge size={16} className="icon about__icon" />
            <span><strong>Lighthouse</strong> - {t("aiSdlc.hardening.lighthouse")}</span>
          </p>
          <p className="about__text ai-sdlc__stack-item">
            <Bug size={16} className="icon about__icon" />
            <span><strong>Sentry</strong> - {t("aiSdlc.hardening.sentry")}</span>
          </p>
          <p className="about__text ai-sdlc__stack-item">
            <BarChart3 size={16} className="icon about__icon" />
            <span><strong>PostHog</strong> - {t("aiSdlc.hardening.posthog")}</span>
          </p>
          <p className="about__text ai-sdlc__stack-item">
            <Bot size={16} className="icon about__icon" />
            <span><strong>AI-Driven Observability</strong> - {t("aiSdlc.hardening.aiObservability")}</span>
          </p>
        </div>
        <p className="about__text">
          <strong>AI code reviews</strong> {t("aiSdlc.hardening.aiReview")}
        </p>
      </article>
    </section>
  );
};

export default AIAugmentedSDLC;
