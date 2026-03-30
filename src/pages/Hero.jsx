import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const greetings = [
  "Hi, I'm Luca Cirio",
  "Welcome to my digital space!",
  "Crafting code, building dreams.",
  "Code. Create. Innovate.",
];

const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const PAUSE_TIME = 1400;

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(greetings[0]);
      return;
    }

    const currentText = greetings[index];
    let timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_TIME);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, DELETING_SPEED);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % greetings.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center text-center px-6"
    >
      <div className="relative w-full max-w-[850px] min-h-[120px] flex items-center justify-center overflow-hidden border-b border-white/30 mb-6">
        {!shouldReduceMotion && (
          <motion.div
            key={index}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/10"
          />
        )}

        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-mono tracking-tight">
          {displayedText}
          {!shouldReduceMotion && (
            <span className="inline-block ml-1 animate-pulse">|</span>
          )}
        </h1>
      </div>

      <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-[700px]">
        Software Web Developer | Front-end & Back-end
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300"
        >
          View Projects
        </a>

        <a
          href="#contacts"
          className="px-5 py-2.5 rounded-full border border-white/40 text-white hover:border-white transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;