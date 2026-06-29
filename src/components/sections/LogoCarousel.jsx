import React from "react";
import { techLogos } from "../../data/techLogos";

const LogoItem = ({ name, logo }) => (
  <div
    className="flex items-center gap-3 px-7 flex-shrink-0"
    style={{ height: 56 }}
    title={name}
  >
    <img
      src={`/img/${logo}`}
      alt={name}
      style={{ width: 30, height: 30, objectFit: "contain", opacity: 0.7 }}
      loading="lazy"
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
    <span
      className="text-sm whitespace-nowrap"
      style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)", fontWeight: 500 }}
    >
      {name}
    </span>
  </div>
);

/**
 * Infinite horizontal logo marquee (Bolotta-style credibility strip).
 * The track holds two copies of the list so the -50% translate loops seamlessly.
 */
const LogoCarousel = () => {
  return (
    <section className="relative z-10 py-10 border-y" style={{ borderColor: "var(--border-subtle)" }}>
      <p
        className="text-center mb-6 text-xs"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-faint)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        Tools of the trade
      </p>

      <div className="marquee marquee-mask overflow-hidden">
        <div className="marquee-track">
          {[...techLogos, ...techLogos].map((t, i) => (
            <LogoItem key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
