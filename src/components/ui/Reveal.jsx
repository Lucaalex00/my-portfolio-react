import React from "react";
import { motion } from "framer-motion";

/**
 * Scroll-into-view reveal wrapper. Fades + slides children in once.
 * `delay` staggers, `y` controls the slide distance.
 */
const Reveal = ({ children, delay = 0, y = 24, className = "", style = {} }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
