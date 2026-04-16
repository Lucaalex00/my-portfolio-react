import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML", logo: "Html.png", startDate: "2020-01", level: "Advanced", category: "Frontend", description: "Solid foundation for semantic structure, accessibility and clean content organization." },
  { name: "CSS", logo: "Css.png", startDate: "2020-01", level: "Advanced", category: "Frontend", description: "Responsive layouts, styling systems and modern UI building with attention to detail." },
  { name: "JavaScript & TypeScript", logo: "Js.png", startDate: "2020-01", level: "Advanced", category: "Frontend", description: "Core language for interactive interfaces, dynamic behavior and frontend logic." },
  { name: "React", logo: "React.png", startDate: "2024-05", level: "Advanced", category: "Frontend Framework", description: "Component-based UI development for modern, scalable and interactive web apps." },
  { name: "Angular", logo: "Angular.png", startDate: "2024-11", level: "Advanced", category: "Frontend Framework", description: "Structured framework for large-scale frontend applications and enterprise workflows." },
  { name: "Vue", logo: "Vue.png", startDate: "2024-03", level: "Intermediate", category: "Frontend Framework", description: "Flexible and lightweight frontend development with clean reactive patterns." },
  // Backend
  { name: "Node.js", logo: "Node.png", startDate: "2024-08", level: "Advanced", category: "Backend", description: "JavaScript runtime for server-side logic and modern backend services." },
  { name: "C#", logo: "Csharp.png", startDate: "2024-08", level: "Advanced", category: "Backend", description: "Structured object-oriented development for backend logic and software solutions." },
  { name: ".NET", logo: "dotNET.svg", startDate: "2024-07", level: "Advanced", category: "Backend Framework", description: "Framework ecosystem for building robust backend applications and APIs." },
  { name: "Python", logo: "Python.svg", startDate: "2024-09", level: "Intermediate", category: "Backend", description: "Versatile language for scripting, automation and broader dev experimentation." },
  { name: "PHP", logo: "PHP.png", startDate: "2024-04", level: "Intermediate", category: "Backend", description: "Backend development for dynamic websites and server-side application logic." },
  { name: "Laravel", logo: "Laravel.svg", startDate: "2024-04", level: "Intermediate", category: "Backend Framework", description: "Elegant PHP framework for structured backend architecture and web applications." },
  // Database
  { name: "MySQL", logo: "MySQL.svg", startDate: "2024-04", level: "Advanced", category: "Database", description: "Relational database management for structured data and persistence layers." },
  { name: "SQL Server", logo: "SQLserver.svg", startDate: "2024-11", level: "Intermediate", category: "Database", description: "Enterprise database solution for storage, queries and backend integrations." },
  // AI & Agents
  { name: "Claude API", icon: "🤖", startDate: "2026-02", level: "Advanced", category: "AI & Agents", description: "Anthropic's Claude models for building intelligent applications and automated workflows. Currently used in production at LeviaHub." },
  { name: "Claude Code", icon: "⚡", startDate: "2026-03", level: "Advanced", category: "AI & Agents", description: "AI-native development CLI. Building full enterprise applications with Claude Code in production." },
  { name: "MCP", icon: "🔌", startDate: "2026-04", level: "Intermediate", category: "AI & Agents", description: "Model Context Protocol — building and consuming MCP servers to extend agent capabilities." },
  { name: "Anthropic SDK", icon: "🧠", startDate: "2026-02", level: "Advanced", category: "AI & Agents", description: "Full Anthropic SDK usage: messages, tool use, streaming and prompt engineering." },
  { name: "OpenAI API", icon: "✦", startDate: "2026-03", level: "Intermediate", category: "AI & Agents", description: "OpenAI API integration for completions, embeddings and multi-model architectures." },
  // Tools
  { name: "Git", icon: "🌿", startDate: "2024-01", level: "Advanced", category: "Tools", description: "Version control fundamentals, branching strategies and collaborative workflows." },
  { name: "Vite", icon: "⚡", startDate: "2024-05", level: "Advanced", category: "Tools", description: "Next-gen frontend build tool. Fast HMR, optimized builds, this portfolio runs on it." },
  { name: "Docker", icon: "🐳", startDate: "2025-01", level: "Beginner", category: "Tools", description: "Container basics for consistent environments and deployment workflows." },
];

const levelColor = {
  Advanced: "var(--neon-cyan)",
  Intermediate: "var(--neon-purple)",
  Beginner: "var(--neon-pink)",
};

const SkillIcon = ({ skill }) => {
  if (skill.icon) {
    return (
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-3 flex-shrink-0"
        style={{
          background: "var(--neon-cyan-dim)",
          border: "1px solid var(--border-glow)",
        }}
      >
        {skill.icon}
      </div>
    );
  }
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 flex-shrink-0"
      style={{
        background: "rgba(226,232,240,0.04)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <img
        src={`/img/${skill.logo}`}
        alt={skill.name}
        style={{ width: 48, height: 48, objectFit: "contain" }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
  );
};

const Skills = () => {
  const sliderRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -sliderRef.current.offsetWidth * 0.8 : sliderRef.current.offsetWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3">Stack</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            A fast overview of{" "}
            <span style={{ color: "var(--neon-cyan)" }}>my technical stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base" style={{ color: "var(--text-muted)", lineHeight: 1.85 }}>
            Scroll to explore. Click a card for details. Frontend, backend, databases — and the AI layer on top.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {["Frontend", "Backend", "Database", "AI & Agents", "Tools"].map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  border: "1px solid var(--border-glow)",
                  color: "var(--neon-cyan)",
                  background: "var(--neon-cyan-dim)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-4">
          {["left", "right"].map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-sm transition-all duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "var(--neon-cyan)",
                border: "1px solid var(--border-glow)",
                background: "var(--neon-cyan-dim)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,245,212,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--neon-cyan-dim)")}
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
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(skill)}
              className="cyber-card rounded-3xl p-5 flex-shrink-0 snap-start cursor-pointer"
              style={{ minWidth: 260, maxWidth: 280 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <SkillIcon skill={skill} />

              <span
                className="text-xs block mb-1"
                style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", letterSpacing: "0.12em" }}
              >
                {skill.category}
              </span>

              <p
                className="font-bold text-base mb-2"
                style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-primary)" }}
              >
                {skill.name}
              </p>

              <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)", minHeight: 64 }}>
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: `${levelColor[skill.level]}15`,
                    color: levelColor[skill.level],
                    border: `1px solid ${levelColor[skill.level]}30`,
                  }}
                >
                  {skill.level}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: "var(--border-subtle)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  {new Date(skill.startDate).toLocaleDateString("en-GB", { year: "numeric", month: "short" })}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-4 text-xs" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
          ← scroll · tap to detail →
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
            <div className="absolute inset-0" style={{ background: "rgba(8,8,15,0.85)", backdropFilter: "blur(8px)" }} />

            <motion.div
              className="relative cyber-card rounded-3xl p-6 w-full max-w-sm"
              style={{ border: "1px solid var(--border-glow)" }}
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border-subtle)", background: "transparent" }}
                onClick={() => setSelected(null)}
              >
                ×
              </button>

              <SkillIcon skill={selected} />

              <span className="text-xs block mb-1" style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", letterSpacing: "0.12em" }}>
                {selected.category}
              </span>
              <p className="font-bold text-xl mb-1" style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-primary)" }}>
                {selected.name}
              </p>

              <div className="flex gap-2 flex-wrap my-3">
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: `${levelColor[selected.level]}15`,
                    color: levelColor[selected.level],
                    border: `1px solid ${levelColor[selected.level]}30`,
                  }}
                >
                  {selected.level}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: "var(--border-subtle)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  Since {new Date(selected.startDate).toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
                </span>
              </div>

              <div
                className="w-full h-px mb-4"
                style={{ background: "var(--border-subtle)" }}
              />

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
