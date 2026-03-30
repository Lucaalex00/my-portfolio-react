import React from "react";
import ParticlesBg from "particles-bg";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <div
        className="fixed inset-0 pointer-events-none opacity-50 z-0"
        style={{ height: "100vh" }}
      >
        <ParticlesBg
          type="cobweb"
          bg={true}
          color="#ffffff"
          num={120}
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <Aboutme />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;