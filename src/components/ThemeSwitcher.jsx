import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher({ mode, onChange }) {
  // Show the currently resolved theme as active even when following system
  const systemDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode ?? (systemDark ? "dark" : "light");

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      <button
        className={`theme-switcher__btn${resolved === "light" ? " theme-switcher__btn--active" : ""}`}
        onClick={() => onChange("light")}
        aria-label="Light theme"
        aria-pressed={mode === "light"}
        title="Light theme"
      >
        {React.createElement(Sun, { size: 14, "aria-hidden": "true" })}
      </button>
      <button
        className={`theme-switcher__btn${resolved === "dark" ? " theme-switcher__btn--active" : ""}`}
        onClick={() => onChange("dark")}
        aria-label="Dark theme"
        aria-pressed={mode === "dark"}
        title="Dark theme"
      >
        {React.createElement(Moon, { size: 14, "aria-hidden": "true" })}
      </button>
    </div>
  );
}
