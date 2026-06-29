import React from "react";

/**
 * Small rounded label/tag. `tone` picks the accent color; `color` overrides it
 * with any CSS color (used for per-item accents).
 */
const TONES = {
  accent: { fg: "var(--accent)", bg: "var(--accent-soft)", bd: "var(--border-glow)" },
  secondary: { fg: "var(--accent-2)", bg: "var(--accent-2-soft)", bd: "rgba(111,222,201,0.25)" },
  muted: { fg: "var(--text-muted)", bg: "rgba(255,255,255,0.03)", bd: "var(--border-subtle)" },
};

const Pill = ({ children, tone = "accent", color, mono = false, className = "", style = {} }) => {
  const t = TONES[tone] || TONES.accent;
  const fg = color || t.fg;
  const bg = color ? `color-mix(in srgb, ${color} 12%, transparent)` : t.bg;
  const bd = color ? `color-mix(in srgb, ${color} 30%, transparent)` : t.bd;

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}
      style={{
        fontFamily: mono ? "var(--font-mono)" : "var(--font-display)",
        color: fg,
        background: bg,
        border: `1px solid ${bd}`,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Pill;
