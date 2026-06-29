import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";
import Pill from "../ui/Pill";
import { useLanguage } from "../../i18n/LanguageContext";

const FAINT = "#3a3f4d";
const ACCENT = "#8aa0ff";
const ACCENT_2 = "#6fdec9";

const initials = (company) =>
  company
    .replace(/—.*/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/**
 * Timeline node. Lights up (faint → accent) as the scroll-progress line
 * reaches its threshold. The current role gets a pulsing core.
 */
const TimelineDot = ({ progress, threshold, current }) => {
  const lit = current ? ACCENT_2 : ACCENT;
  const borderColor = useTransform(progress, [threshold - 0.02, threshold], [FAINT, lit]);
  const boxShadow = useTransform(
    progress,
    [threshold - 0.02, threshold],
    ["0 0 0px rgba(0,0,0,0)", `0 0 12px ${current ? "rgba(111,222,201,0.5)" : "rgba(138,160,255,0.5)"}`]
  );

  return (
    <motion.span
      // centered on the rail: cell is 16px wide, dot is 16px → center at 8px
      className="absolute left-0 top-7 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ background: "var(--bg-primary)", border: "2px solid", borderColor, boxShadow, zIndex: 2 }}
    >
      {current && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: ACCENT_2 }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.span>
  );
};

const CareerCard = ({ item, index }) => (
  <motion.article
    className="surface-card rounded-2xl p-6 md:p-7 flex flex-col md:flex-row gap-5"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
  >
    {/* Logo / monogram */}
    <div className="flex-shrink-0">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-base font-bold"
        style={{
          fontFamily: "var(--font-display)",
          background: "var(--accent-soft)",
          border: "1px solid var(--border-glow)",
          color: "var(--accent)",
        }}
      >
        {initials(item.company)}
      </div>
    </div>

    {/* Body */}
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
        <div>
          <h3 className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {item.role}
          </h3>
          <p className="text-sm mt-0.5" style={{ color: "var(--accent)" }}>
            {item.company}
            {item.location && <span style={{ color: "var(--text-faint)" }}> · {item.location}</span>}
          </p>
        </div>

        <span
          className="text-xs flex items-center gap-2 flex-shrink-0 whitespace-nowrap"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          {item.current && (
            <motion.span
              className="w-2 h-2 rounded-full inline-block"
              style={{ background: "var(--accent-2)" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {item.period}
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-4 mt-3" style={{ color: "var(--text-muted)" }}>
        {item.summary}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <Pill key={t} tone="muted" mono className="!px-2 !py-0.5">
            {t}
          </Pill>
        ))}
      </div>
    </div>
  </motion.article>
);

const Experience = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  // Merge structural data with the translated text for the current language.
  const items = experiences.map((e) => {
    const L = t(`experience.items.${e.id}`) || {};
    return {
      id: e.id,
      current: e.current,
      company: L.company || e.company,
      role: L.role,
      location: L.location,
      period: L.period,
      summary: L.summary,
      tech: L.tech || e.tech || [],
    };
  });
  // Progress runs from the moment the list enters the lower viewport
  // until it leaves the upper viewport — the line fills as you scroll.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.55"],
  });

  const fillScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const n = experiences.length;

  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label={t("experience.label")}
          title={t("experience.title")}
          highlight={t("experience.highlight")}
          subtitle={t("experience.subtitle")}
        />

        <div ref={containerRef} className="relative">
          {/* Rail: faint base line + scroll-driven gradient fill.
              Centered at x = 8px (the rail cell is 16px wide). */}
          <div className="absolute top-7 bottom-7 w-0.5 rounded-full" style={{ left: "7px", background: FAINT, opacity: 0.5 }} />
          <motion.div
            className="absolute top-7 bottom-7 w-0.5 rounded-full"
            style={{
              left: "7px",
              background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
              transformOrigin: "top",
              scaleY: fillScaleY,
            }}
          />

          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div key={item.id} className="flex gap-4 md:gap-6">
                {/* Rail cell — holds the centered node */}
                <div className="relative w-4 flex-shrink-0">
                  <TimelineDot
                    progress={scrollYProgress}
                    threshold={n > 1 ? i / (n - 1) : 0}
                    current={item.current}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <CareerCard item={item} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
