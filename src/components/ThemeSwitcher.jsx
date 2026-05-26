import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher({ mode, onChange }) {
  // Show the currently resolved theme as active even when following system
  const systemDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode ?? (systemDark ? "dark" : "light");
  const nextMode = resolved === "dark" ? "light" : "dark";
  const ToggleIcon = nextMode === "light" ? Sun : Moon;
  const label = nextMode === "light" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <div className="theme-switcher" aria-label="Color theme">
      <button
        className="theme-switcher__btn theme-switcher__btn--single"
        onClick={() => onChange(nextMode)}
        aria-label={label}
        title={label}
      >
        <ToggleIcon size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
