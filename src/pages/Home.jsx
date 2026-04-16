import React from "react";
import ParticlesBg from "particles-bg";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts";
import AIAgent from "./AIAgent";

const Home = () => {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{ height: "100vh" }}
      >
        <ParticlesBg
          type="cobweb"
          bg={true}
          color="#00f5d4"
          num={80}
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <Aboutme />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </div>

      <AIAgent />
    </div>
  );
};

export default Home;
