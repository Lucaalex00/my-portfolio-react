import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../data/navigation";
import LanguageToggle from "./ui/LanguageToggle";
import { useLanguage } from "../i18n/LanguageContext";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setIsOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const linkStyle = {
    fontFamily: "var(--font-display)",
    color: "var(--text-muted)",
    background: "transparent",
    border: "1px solid transparent",
    cursor: "pointer",
  };
  const linkEnter = (e) => {
    e.currentTarget.style.color = "var(--text-primary)";
    e.currentTarget.style.background = "var(--accent-soft)";
  };
  const linkLeave = (e) => {
    e.currentTarget.style.color = "var(--text-muted)";
    e.currentTarget.style.background = "transparent";
  };

  return (
    <>
      {/* Top bar — visible only at the very top */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "transparent" : "rgba(10,11,16,0.6)",
          backdropFilter: scrolled ? "none" : "blur(16px)",
          borderBottom: scrolled ? "none" : "1px solid var(--border-subtle)",
          pointerEvents: scrolled ? "none" : "auto",
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-bold text-lg"
            style={{ fontFamily: "var(--font-display)", background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="gradient-text">LC</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                  style={linkStyle}
                  onMouseEnter={linkEnter}
                  onMouseLeave={linkLeave}
                >
                  {t(`nav.links.${link.id}`)}
                </button>
              ))}
            </div>

            <LanguageToggle />

            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsOpen((o) => !o)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-px w-5" style={{ background: "var(--accent)" }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating pill — appears when scrolled */}
      <div
        ref={menuRef}
        className="fixed z-40 transition-all duration-500"
        style={{
          top: 16,
          left: "50%",
          transform: `translateX(-50%) translateY(${scrolled ? "0" : "-80px"})`,
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <div
          className="flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: "rgba(16,18,25,0.85)",
            border: "1px solid var(--border-subtle)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <button
            onClick={() => scrollTo("hero")}
            className="px-3 py-1 rounded-full text-xs font-bold mr-1"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--accent-soft)",
              border: "1px solid var(--border-glow)",
              cursor: "pointer",
            }}
          >
            <span className="gradient-text">LC</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 rounded-full text-sm transition-all duration-200"
                style={{ ...linkStyle, border: "none" }}
                onMouseEnter={linkEnter}
                onMouseLeave={linkLeave}
              >
                {t(`nav.links.${link.id}`)}
              </button>
            ))}
          </div>

          <div className="ml-1 mr-0.5">
            <LanguageToggle size="sm" />
          </div>

          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
            onClick={() => setIsOpen((o) => !o)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "1rem", lineHeight: 1 }}>×</span>
            ) : (
              [0, 1, 2].map((i) => <span key={i} className="block h-px w-4" style={{ background: "var(--accent)" }} />)
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            className="absolute top-full left-1/2 mt-2 py-3 rounded-2xl flex flex-col items-center gap-1"
            style={{
              transform: "translateX(-50%)",
              minWidth: 180,
              background: "rgba(16,18,25,0.96)",
              border: "1px solid var(--border-subtle)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="w-full px-6 py-2 text-sm text-center transition-all duration-200"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)", background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {t(`nav.links.${link.id}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarComponent;
