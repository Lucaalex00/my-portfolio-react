import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tags = ["AI & Agents", "Enterprise Software", "Frontend Focus", "Continuous Growth"];

const AboutMe = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  return (
    <section id="aboutme" className="relative z-10 py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3">About</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            A developer focused on
            <br />
            <span style={{ color: "var(--neon-cyan)" }}>impact and evolution</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base" style={{ color: "var(--text-muted)", lineHeight: 1.85 }}>
            Professional experience. Passion-driven depth. Currently shipping AI-powered enterprise software.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ fontFamily: "'Space Mono', monospace", border: "1px solid var(--border-glow)", color: "var(--neon-cyan)", background: "var(--neon-cyan-dim)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

          {/* Panel 1 */}
          <motion.div
            className="cyber-card rounded-3xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            onClick={() => setOpen1((v) => !v)}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                background: open1 ? "var(--neon-cyan-dim)" : "transparent",
                borderBottom: open1 ? "1px solid var(--border-glow)" : "1px solid transparent",
                transition: "all 0.3s ease",
              }}
            >
              <span className="font-bold text-sm" style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-primary)" }}>
                ⚡ Professional Profile
              </span>
              <span style={{ color: "var(--neon-cyan)", fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", lineHeight: 1 }}>
                {open1 ? "−" : "+"}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {open1 && (
                <motion.div
                  key="panel1-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="px-6 pb-6 pt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {`I'm a fullstack developer with a strong pull toward frontend and a growing interest in AI engineering. I spend a lot of time outside work hours pushing my limits — the gap between experience on paper and actual depth reflects that.

Right now I work as Software Developer at LeviaHub, a multinational logistics company, where I handle bug fixing and full developments on their existing system, I founded their internal administration portal, and I'm now frontend lead on a new project built entirely with Claude Code. Before that, I leveled up fast at ALTEN in Genova, where consulting-grade standards shaped the way I approach production software.

My current focus: AI agents, MCP servers, and everything in the Anthropic ecosystem.`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Panel 2 */}
          <motion.div
            className="cyber-card rounded-3xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setOpen2((v) => !v)}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                background: open2 ? "var(--neon-cyan-dim)" : "transparent",
                borderBottom: open2 ? "1px solid var(--border-glow)" : "1px solid transparent",
                transition: "all 0.3s ease",
              }}
            >
              <span className="font-bold text-sm" style={{ fontFamily: "'Space Mono', monospace", color: "var(--text-primary)" }}>
                🎧 Beyond Code
              </span>
              <span style={{ color: "var(--neon-cyan)", fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", lineHeight: 1 }}>
                {open2 ? "−" : "+"}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {open2 && (
                <motion.div
                  key="panel2-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="px-6 pb-6 pt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {`Outside of work I'm into music, travel, and constantly challenging myself in new directions. I enjoy exploring ideas that sit at the edge of what's currently possible — technically or otherwise.

I believe curiosity is the most underrated professional skill. It's what turned a pandemic hobby into a career, and what keeps me moving into whatever frontier opens next. I bring that same constructive energy into every team I'm part of.`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
