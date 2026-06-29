import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

// Panel order + their icons. The text comes from the locale dictionary.
const PANELS = [
  { id: "profile", icon: "⚡" },
  { id: "beyond", icon: "🎧" },
];

const AccordionPanel = ({ id, icon, title, body, open, onToggle, delay }) => (
  <motion.div
    className="surface-card rounded-2xl overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    onClick={onToggle}
  >
    <div
      className="flex items-center justify-between px-6 py-4"
      style={{
        background: open ? "var(--accent-soft)" : "transparent",
        borderBottom: open ? "1px solid var(--border-glow)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <span className="font-semibold text-sm flex items-center gap-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
        <span style={{ opacity: 0.9 }}>{icon}</span> {title}
      </span>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "1.2rem", lineHeight: 1 }}
      >
        +
      </motion.span>
    </div>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p className="px-6 pb-6 pt-4 text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--text-muted)" }}>
            {body}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const About = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState("profile");

  return (
    <section id="aboutme" className="relative z-10 py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={t("about.label")}
          title={t("about.title")}
          highlight={t("about.highlight")}
          subtitle={t("about.subtitle")}
          tags={t("about.tags")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {PANELS.map((p, i) => (
            <AccordionPanel
              key={p.id}
              id={p.id}
              icon={p.icon}
              title={t(`about.panels.${p.id}.title`)}
              body={t(`about.panels.${p.id}.body`)}
              delay={i * 0.1}
              open={openId === p.id}
              onToggle={() => setOpenId((cur) => (cur === p.id ? null : p.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
