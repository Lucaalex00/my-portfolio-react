import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center text-center px-6"
    >
      <motion.div
        className="flex flex-col items-center gap-5 max-w-3xl w-full"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="section-label">Portfolio</span>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Mono', monospace", lineHeight: 1.05, color: "var(--text-primary)" }}
        >
          Luca{" "}
          <span
            style={{
              color: "var(--neon-cyan)",
              textShadow: "0 0 32px var(--neon-cyan-glow)",
            }}
          >
            Cirio
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          Fullstack Developer — AI &amp; Agents Specialist
        </p>

        <div
          className="w-16 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
          }}
        />

        <p
          className="text-sm md:text-base max-w-lg"
          style={{ color: "var(--text-muted)", lineHeight: 1.85 }}
        >
          Building with code and AI — from enterprise logistics to digital
          experiences. Currently shipping full Claude Code in production.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a
            href="/Luca_Cirio_CV.pdf"
            download
            className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "var(--neon-cyan)",
              color: "#08080f",
              boxShadow: "0 0 24px var(--neon-cyan-glow)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 48px var(--neon-cyan-glow)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 24px var(--neon-cyan-glow)")
            }
          >
            Download CV
          </a>

          <a
            href="#contacts"
            className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              fontFamily: "'Space Mono', monospace",
              border: "1px solid var(--border-glow)",
              color: "var(--neon-cyan)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--neon-cyan-dim)";
              e.currentTarget.style.borderColor = "var(--neon-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border-glow)";
            }}
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="section-label" style={{ fontSize: "0.62rem" }}>
            Scroll
          </span>
          <motion.div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(180deg, var(--neon-cyan), transparent)",
            }}
            animate={{ scaleY: [0, 1, 0], originY: "top" }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
