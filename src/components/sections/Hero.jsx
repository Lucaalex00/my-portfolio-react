import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center text-center px-6"
    >
      <motion.div
        className="flex flex-col items-center gap-6 max-w-3xl w-full"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span
          className="text-xs flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent-2)",
            background: "var(--accent-2-soft)",
            border: "1px solid rgba(111,222,201,0.22)",
            letterSpacing: "0.06em",
          }}
        >
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--accent-2)" }} />
          {t("hero.badge")}
        </span>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", lineHeight: 1.05, color: "var(--text-primary)" }}
        >
          Luca <span className="gradient-text">Cirio</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)", letterSpacing: "0.01em" }}
        >
          {t("hero.role")}
        </p>

        <p className="text-sm md:text-base max-w-lg" style={{ color: "var(--text-muted)", lineHeight: 1.85 }}>
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a href="/Luca_Cirio_CV.pdf" download className="btn-primary px-6 py-3 rounded-full text-sm">
            {t("hero.ctaCv")}
          </a>
          <a href="#contacts" className="btn-ghost px-6 py-3 rounded-full text-sm">
            {t("hero.ctaContact")}
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
          <span className="section-label" style={{ fontSize: "0.62rem" }}>{t("hero.scroll")}</span>
          <motion.div
            className="w-px h-10"
            style={{ background: "linear-gradient(180deg, var(--accent), transparent)", originY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
