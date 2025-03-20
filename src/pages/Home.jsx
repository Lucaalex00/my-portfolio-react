import React from "react";
import ParticlesBg from "particles-bg";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-auto">
      {/* Background con particelle più piccole */}
      <ParticlesBg
        type="cobweb"
        bg={true}
        color="#ffffff"
        num={120} // Numero delle particelle
      />

      <style>{`
        .particles-bg-canvas-self {
          z-index: 0 !important; /* Forza z-index per le particelle */
          opacity: 0.5;
          height: 100vh !important;
          position: fixed !important;
          pointer-events: none;
        }
      `}</style>

      <Hero/>

      <Aboutme />
      
      <Skills/>

      <Projects/>
      
      <Contacts/>
     
    </div>
  );
};

export default Home;
