import React from "react";
import { useTranslation } from "../context/LangContext.jsx";

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      <button
        className={`lang-switcher__btn${lang === "en" ? " lang-switcher__btn--active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        lang="en"
      >
        EN
      </button>
      <button
        className={`lang-switcher__btn${lang === "de" ? " lang-switcher__btn--active" : ""}`}
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        lang="de"
      >
        DE
      </button>
    </div>
  );
}
