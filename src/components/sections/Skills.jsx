import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, levelColor } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";
import Pill from "../ui/Pill";
import { useLanguage } from "../../i18n/LanguageContext";

const SkillIcon = ({ skill }) => {
  if (skill.icon) {
    return (
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 flex-shrink-0"
        style={{ background: "var(--accent-soft)", border: "1px solid var(--border-glow)" }}
      >
        {skill.icon}
      </div>
    );
  }
  return (
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 flex-shrink-0"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)" }}
    >
      <img
        src={`/img/${skill.logo}`}
        alt={skill.name}
        style={{ width: 40, height: 40, objectFit: "contain" }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
  );
};

const Skills = () => {
  const sliderRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const { t, lang } = useLanguage();

  const locale = lang === "it" ? "it-IT" : "en-GB";
  const categoryMap = t("skills.categoryMap");
  const levels = t("skills.levels");
  const fmt = (d, opts) => new Date(d).toLocaleDateString(locale, opts);
  const catLabel = (c) => (categoryMap && categoryMap[c]) || c;
  const levelLabel = (l) => (levels && levels[l]) || l;

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={t("skills.label")}
          title={t("skills.title")}
          highlight={t("skills.highlight")}
          subtitle={t("skills.subtitle")}
          tags={t("skills.categories")}
        />

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-4">
          {["left", "right"].map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={`Scroll ${dir}`}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-sm transition-all duration-200"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", border: "1px solid var(--border-subtle)", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-soft)"; e.currentTarget.style.borderColor = "var(--border-glow)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
            >
              {dir === "left" ? "←" : "→"}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory overflow_hacking"
          style={{ scrollbarWidth: "none" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.key}
              onClick={() => setSelected(skill)}
              className="surface-card rounded-2xl p-5 flex-shrink-0 snap-start cursor-pointer"
              style={{ minWidth: 256, maxWidth: 272 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <SkillIcon skill={skill} />

              <span className="text-xs block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)", letterSpacing: "0.1em" }}>
                {catLabel(skill.category)}
              </span>

              <p className="font-semibold text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                {skill.name}
              </p>

              <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)", minHeight: 64 }}>
                {t(`skills.items.${skill.key}`)}
              </p>

              <div className="flex flex-wrap gap-2">
                <Pill color={levelColor[skill.level]} className="!px-2 !py-0.5">{levelLabel(skill.level)}</Pill>
                <Pill tone="muted" mono className="!px-2 !py-0.5">
                  {fmt(skill.startDate, { year: "numeric", month: "short" })}
                </Pill>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-4 text-xs" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          {t("skills.hint")}
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0" style={{ background: "rgba(10,11,16,0.85)", backdropFilter: "blur(8px)" }} />

            <motion.div
              className="relative surface-card rounded-3xl p-6 w-full max-w-sm"
              style={{ border: "1px solid var(--border-glow)" }}
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border-subtle)", background: "transparent" }}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>

              <SkillIcon skill={selected} />

              <span className="text-xs block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)", letterSpacing: "0.1em" }}>
                {catLabel(selected.category)}
              </span>
              <p className="font-bold text-xl mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                {selected.name}
              </p>

              <div className="flex gap-2 flex-wrap my-3">
                <Pill color={levelColor[selected.level]} className="!px-2 !py-0.5">{levelLabel(selected.level)}</Pill>
                <Pill tone="muted" mono className="!px-2 !py-0.5">
                  {t("skills.since")} {fmt(selected.startDate, { year: "numeric", month: "long" })}
                </Pill>
              </div>

              <div className="w-full h-px mb-4" style={{ background: "var(--border-subtle)" }} />

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t(`skills.items.${selected.key}`)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
