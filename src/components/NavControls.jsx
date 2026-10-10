import React from "react";
import { Sun, Moon } from "lucide-react";

export default function NavControls({ mode, onThemeChange }) {
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
    </div>
  );
}
