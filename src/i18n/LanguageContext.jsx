import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { en } from "./locales/en";
import { it } from "./locales/it";

const DICTS = { en, it };
const STORAGE_KEY = "lc-lang";

// Auto-detect on first visit: italian browser → it, everything else → en.
// A previously chosen language (localStorage) always wins.
const detectInitial = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "it") return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("it") ? "it" : "en";
  } catch {
    return "en";
  }
};

// Dot-path lookup: get(obj, "hero.badge")
const get = (obj, path) =>
  path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectInitial);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  // t("hero.badge") → string. Falls back to EN, then to the key itself.
  const t = useCallback(
    (key) => {
      const val = get(DICTS[lang], key);
      if (val !== undefined) return val;
      const fallback = get(DICTS.en, key);
      return fallback !== undefined ? fallback : key;
    },
    [lang]
  );

  // Like t(), but for an explicit language — used by the agent to reply in the
  // language it detected from the question, regardless of the UI language.
  const tIn = useCallback((l, key) => {
    const val = get(DICTS[l] || DICTS.en, key);
    if (val !== undefined) return val;
    const fallback = get(DICTS.en, key);
    return fallback !== undefined ? fallback : key;
  }, []);

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "it" : "en")), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, tIn }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
