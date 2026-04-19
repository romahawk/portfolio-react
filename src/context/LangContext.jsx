/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import en from "../locales/en.js";
import de from "../locales/de.js";

const LOCALES = { en, de };
const STORAGE_KEY = "lang";
const DEFAULT_LANG = "en";

const LangContext = createContext(null);

// Resolve a dot-notation key against a locale object.
// Returns the value at that path (string, array, or object), or undefined.
function resolve(obj, key) {
  const parts = key.split(".");
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[part];
  }
  return cur;
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
  );

  // Keep document.lang in sync on every render so it's correct after hydration too
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((newLang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    setLangState(newLang);
  }, []);

  // t(key) → translated value for current lang, fallback to English, fallback to key string
  const t = useCallback(
    (key) => {
      const val = resolve(LOCALES[lang], key);
      if (val !== undefined) return val;
      const fallback = resolve(LOCALES.en, key);
      return fallback !== undefined ? fallback : key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LangContext);
}
