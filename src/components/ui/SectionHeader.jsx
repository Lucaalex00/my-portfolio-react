import React from "react";
import { motion } from "framer-motion";
import Pill from "./Pill";

/**
 * Shared section heading: small mono label, big display title with an
 * optional highlighted word, a muted subtitle and optional tag pills.
 *
 * Usage:
 *   <SectionHeader label="About" title="A developer focused on" highlight="impact and evolution" subtitle="..." tags={[...]} />
 */
const SectionHeader = ({ label, title, highlight, subtitle, tags = [], align = "center" }) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col ${alignment} mb-14`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {label && <span className="section-label mb-4">{label}</span>}

      <h2
        className="text-3xl md:text-5xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", lineHeight: 1.12 }}
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className={`max-w-2xl text-sm md:text-base mt-4 ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: "var(--text-muted)", lineHeight: 1.85 }}
        >
          {subtitle}
        </p>
      )}

      {tags.length > 0 && (
        <div className={`flex flex-wrap gap-2 mt-6 ${align === "center" ? "justify-center" : ""}`}>
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
