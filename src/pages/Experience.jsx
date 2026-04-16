import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "Self-taught",
    company: "Personal — COVID era",
    description:
      "Started coding from zero during lockdown. Fell in love with HTML, CSS and JavaScript. No course, no roadmap — just curiosity and obsession.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "var(--neon-cyan)",
  },
  {
    year: "2024",
    title: "Boolean Bootcamp",
    company: "Boolean",
    description:
      "Completed a full professional web development bootcamp. Formalized the foundations and pushed into modern frameworks, backend development and team workflows.",
    tech: ["VueJS", "Node.js", "PHP", "Laravel", "MySQL"],
    color: "var(--neon-purple)",
  },
  {
    year: "2025",
    title: "Software Developer",
    company: "ALTEN — Genova",
    description:
      "Joined a multinational consulting firm. Professional-grade standards, real enterprise projects. This is where the depth got built fast.",
    tech: ["React", ".NET", "SQL Server"],
    color: "var(--neon-cyan)",
  },
  {
    year: "NOW",
    title: "Software Developer",
    company: "LeviaHub",
    description:
      "Bug fixing and full feature development on existing systems, founder of the internal administration portal, and now frontend lead on a new project built with Claude Code.",
    tech: ["Angular", "TypeScript", ".NET", "MCP", "AI/Agents"],
    color: "var(--neon-purple)",
    current: true,
  },
];

const Dot = ({ color, current }) => (
  <div
    className="w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0"
    style={{
      background: "var(--bg-primary)",
      borderColor: color,
      boxShadow: `0 0 20px ${color}`,
      zIndex: 1,
    }}
  >
    {current && (
      <motion.div
        className="w-2.5 h-2.5 rounded-full"
        style={{ background: color }}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    )}
  </div>
);

const Card = ({ m }) => (
  <div
    className="cyber-card rounded-2xl p-5"
    style={{ border: `1px solid ${m.color}22` }}
  >
    <span
      className="text-xs font-bold"
      style={{
        fontFamily: "'Space Mono', monospace",
        color: m.color,
        letterSpacing: "0.08em",
      }}
    >
      {m.year}
    </span>
    <p
      className="font-bold mt-1 mb-0.5 text-sm"
      style={{ color: "var(--text-primary)", fontFamily: "'Space Mono', monospace" }}
    >
      {m.title}
    </p>
    <p className="text-xs mb-3" style={{ color: m.color, opacity: 0.75 }}>
      {m.company}
    </p>
    <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
      {m.description}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {m.tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 rounded-full text-xs"
          style={{
            background: `${m.color}12`,
            color: m.color,
            border: `1px solid ${m.color}30`,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3">Timeline</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            The path that{" "}
            <span style={{ color: "var(--neon-cyan)" }}>built me</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-sm md:text-base"
            style={{ color: "var(--text-muted)", lineHeight: 1.85 }}
          >
            From a pandemic hobby to production software — across bootcamps,
            enterprise consulting and AI-native development.
          </p>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden md:block">
          <div className="relative flex items-start" style={{ paddingTop: "28px", gap: "24px" }}>
            <div
              className="absolute left-0 right-0 h-px timeline-line"
              style={{ top: "14px", zIndex: 0 }}
            />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center"
                style={{ flex: 1, zIndex: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Dot color={m.color} current={m.current} />
                <div className="mt-6 w-full">
                  <Card m={m} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-8">
          <div
            className="absolute left-3 top-0 bottom-0 w-px timeline-line"
            style={{ zIndex: 0 }}
          />
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className="relative"
              style={{ marginBottom: i < milestones.length - 1 ? "2rem" : 0 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="absolute"
                style={{ left: "-32px", top: "14px", zIndex: 1 }}
              >
                <Dot color={m.color} current={m.current} />
              </div>
              <Card m={m} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
