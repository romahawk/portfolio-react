import { useState, useEffect } from "react";

const KEY = "theme";

function applyTheme(stored) {
  const resolved = stored
    ? stored
    : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", resolved);
}

export function useTheme() {
  // null = follow system; "light" | "dark" = explicit user choice
  const [mode, setMode] = useState(
    () => localStorage.getItem(KEY) || null
  );

  useEffect(() => {
    if (mode) {
      localStorage.setItem(KEY, mode);
    } else {
      localStorage.removeItem(KEY);
    }
    applyTheme(mode);

    if (mode) return; // system listener only active when no explicit choice

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme(null);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  return [mode, setMode];
}
