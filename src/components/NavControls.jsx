import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

export default function NavControls({ mode, onThemeChange }) {
  const { lang, setLang } = useTranslation();

  const systemDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode ?? (systemDark ? "dark" : "light");
  const nextTheme = resolved === "dark" ? "light" : "dark";
  const ThemeIcon = nextTheme === "light" ? Sun : Moon;
  const themeLabel = nextTheme === "light" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <div className="nav-controls" role="group" aria-label="Site preferences">
      <button
        className="nav-controls__btn nav-controls__btn--theme-toggle"
        onClick={() => onThemeChange(nextTheme)}
        aria-label={themeLabel}
        title={themeLabel}
      >
        <ThemeIcon size={14} aria-hidden="true" />
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
