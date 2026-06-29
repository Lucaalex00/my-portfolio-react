import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";

/**
 * Compact IT | EN switch. The active language is highlighted.
 * `size` tweaks padding for the top bar vs the floating pill.
 */
const LanguageToggle = ({ size = "md" }) => {
  const { lang, setLang } = useLanguage();
  const pad = size === "sm" ? "px-2 py-0.5" : "px-2.5 py-1";

  const Option = ({ code }) => {
    const active = lang === code;
    return (
      <button
        onClick={() => setLang(code)}
        aria-pressed={active}
        className={`${pad} rounded-full text-xs uppercase transition-all duration-200`}
        style={{
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.06em",
          fontWeight: active ? 700 : 500,
          color: active ? "var(--accent)" : "var(--text-faint)",
          background: active ? "var(--accent-soft)" : "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {code}
      </button>
    );
  };

  return (
    <div
      className="flex items-center rounded-full"
      style={{ border: "1px solid var(--border-subtle)" }}
      title="Language"
    >
      <Option code="it" />
      <Option code="en" />
    </div>
  );
};

export default LanguageToggle;
