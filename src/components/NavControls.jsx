import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

export default function NavControls({ mode, onThemeChange }) {
  const { lang, setLang } = useTranslation();

  const systemDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode ?? (systemDark ? "dark" : "light");

  return (
    <div className="nav-controls" role="group" aria-label="Site preferences">
      <button
        className={`nav-controls__btn${resolved === "light" ? " nav-controls__btn--active" : ""}`}
        onClick={() => onThemeChange("light")}
        aria-label="Light theme"
        aria-pressed={mode === "light"}
        title="Light theme"
      >
        <Sun size={14} aria-hidden="true" />
      </button>
      <button
        className={`nav-controls__btn${resolved === "dark" ? " nav-controls__btn--active" : ""}`}
        onClick={() => onThemeChange("dark")}
        aria-label="Dark theme"
        aria-pressed={mode === "dark"}
        title="Dark theme"
      >
        <Moon size={14} aria-hidden="true" />
      </button>

      <span className="nav-controls__sep" aria-hidden="true" />

      <button
        className={`nav-controls__btn nav-controls__btn--lang${lang === "en" ? " nav-controls__btn--active nav-controls__btn--lang-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        lang="en"
      >
        EN
      </button>
      <button
        className={`nav-controls__btn nav-controls__btn--lang${lang === "de" ? " nav-controls__btn--active nav-controls__btn--lang-active" : ""}`}
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        lang="de"
      >
        DE
      </button>
    </div>
  );
}
