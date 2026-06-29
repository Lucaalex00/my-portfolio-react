import React from "react";
import Hero from "../components/sections/Hero";
import LogoCarousel from "../components/sections/LogoCarousel";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import FooterComponent from "../components/FooterComponent";
import AIAgent from "./AIAgent";

/**
 * Calm ambient background — two soft accent glows + a faint grid,
 * replacing the busy cobweb particles for a more minimal feel.
 */
const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div
      className="absolute rounded-full"
      style={{
        top: "-12%", left: "-8%", width: "55vw", height: "55vw",
        background: "radial-gradient(circle, var(--accent-glow), transparent 65%)",
        filter: "blur(40px)", opacity: 0.5,
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        bottom: "-15%", right: "-10%", width: "50vw", height: "50vw",
        background: "radial-gradient(circle, var(--accent-2-glow), transparent 65%)",
        filter: "blur(40px)", opacity: 0.4,
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 80%)",
        opacity: 0.5,
      }}
    />
  </div>
);

const Home = () => {
  return (
    <div className="relative min-h-screen w-full" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <AmbientBackground />

      <div className="relative z-10">
        <Hero />
        <LogoCarousel />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <FooterComponent />
      </div>

      <AIAgent />
    </div>
  );
};

export default Home;
