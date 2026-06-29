import React from "react";
import { navLinks } from "../data/navigation";
import { useLanguage } from "../i18n/LanguageContext";

const FooterComponent = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold gradient-text" style={{ fontFamily: "var(--font-display)" }}>
            Luca Cirio
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-faint)" }}>
            {t("footer.tagline")}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-1.5 rounded-full text-xs transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t(`nav.links.${link.id}`)}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <p className="text-center py-4 text-xs" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          © {year} Luca Cirio · {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
