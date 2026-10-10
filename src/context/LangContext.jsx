/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect } from "react";
import en from "../locales/en.js";

// English only (German removed Oct 2026). A stored localStorage "lang" value is ignored.
// t() remains for detail-page components that still read en.js; site copy lives in src/content/site.js.
const LANG = "en";

const LangContext = createContext(null);

// Resolve a dot-notation key against the locale object.
function resolve(obj, key) {
  const parts = key.split(".");
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[part];
  }
  return cur;
}

const setLang = () => {};

export function LangProvider({ children }) {
  useEffect(() => {
    document.documentElement.lang = LANG;
  }, []);

  // t(key) → English value, falling back to the key string
  const t = useCallback((key) => {
    const val = resolve(en, key);
    return val !== undefined ? val : key;
  }, []);

  return (
    <LangContext.Provider value={{ lang: LANG, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LangContext);
}
