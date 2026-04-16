import React, { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { id: "aboutme", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contact" },
];

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

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
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Top bar — visible only at the very top */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "transparent" : "rgba(8,8,15,0.75)",
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
            style={{ fontFamily: "'Space Mono', monospace", color: "var(--neon-cyan)", background: "none", border: "none", cursor: "pointer" }}
          >
            LC
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 rounded-full text-xs transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--text-muted)",
                  background: "transparent",
                  border: "1px solid transparent",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--neon-cyan)";
                  e.currentTarget.style.borderColor = "var(--border-glow)";
                  e.currentTarget.style.background = "var(--neon-cyan-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger for top bar */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen((o) => !o)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-5 transition-all duration-300"
                style={{ background: "var(--neon-cyan)" }}
              />
            ))}
          </button>
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
            background: "rgba(8,8,15,0.92)",
            border: "1px solid var(--border-glow)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 30px rgba(0,245,212,0.06), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="px-3 py-1 rounded-full text-xs font-bold mr-1"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "var(--neon-cyan)",
              background: "var(--neon-cyan-dim)",
              border: "1px solid var(--border-glow)",
              cursor: "pointer",
            }}
          >
            LC
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 rounded-full text-xs transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--text-muted)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--neon-cyan)";
                  e.currentTarget.style.background = "var(--neon-cyan-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger inside pill */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
            onClick={() => setIsOpen((o) => !o)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {isOpen ? (
              <span style={{ color: "var(--neon-cyan)", fontFamily: "'Space Mono', monospace", fontSize: "1rem", lineHeight: 1 }}>×</span>
            ) : (
              [0, 1, 2].map((i) => (
                <span key={i} className="block h-px w-4" style={{ background: "var(--neon-cyan)" }} />
              ))
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
              background: "rgba(8,8,15,0.96)",
              border: "1px solid var(--border-glow)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="w-full px-6 py-2 text-sm text-center transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--text-muted)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarComponent;
