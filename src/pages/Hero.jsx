import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const greetings = [
  "Hi, I'm Luca Cirio",
  "Welcome to my digital space!",
  "Crafting code, building dreams.",
  "Code. Create. Innovate.",
  "Turning ideas into reality.",
  "Hey there! I'm Luca Cirio",
  "Let's build something amazing!",
  "Bringing ideas to life with code."
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => greetings[index].slice(0, prev.length + 1));
        if (displayedText === greetings[index]) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <div>
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center relative z-1"
      >
        <div className="relative w-full max-w-[800px] h-[100px] flex items-center justify-center overflow-hidden border-b-2 border-white mb-5">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            key={index}
            className="absolute bg-white h-full w-full"
          ></motion.div>
          <h1 className="text-2xl md:text-3xl mb-4 font-mono relative z-10">
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
        </div>
        <p className="text-lg md:text-2xl opacity-80 font-[Gidole]">
          Software Web Developer | Front-end & Back-end
        </p>
      </section>
    </div>
  );
};

export default Hero;