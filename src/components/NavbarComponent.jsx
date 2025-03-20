import React, { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Stato per aprire/chiudere il menu
  const [isScrolled, setIsScrolled] = useState(false); // Stato per rilevare se l'utente ha scrollato

  // Funzione per aprire/chiudere il menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per lo scroll fluido
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Chiude il menu mobile dopo il click
  };

  // Monitorare lo scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true); // Navbar si nasconde quando scorre più di 1px
      } else {
          setIsScrolled(false); // Navbar è visibile in cima
          setIsOpen(false)
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    // Pulizia dell'evento quando il componente è smontato
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav
      className={`${
        !isScrolled
          ? "bg-gray-800 text-white opacity-80 w-full z-10 fixed top-0 left-0 right-0 transition-all duration-300"
          : "bg-transparent text-white w-full z-10 fixed top-0 left-0 right-0 transition-all duration-300"
              }`}
              >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          {!isScrolled && (
            <a
              onClick={() => handleScroll("hero")}
              className="text-xl hover:text-gray-400 duration-500 font-bold cursor-pointer"
            >
              Luca Cirio
            </a>
          )}

          {/* MENU DESKTOP (visibile solo quando non è scrollato) */}
          {!isScrolled && (
            <div className="hidden md:flex space-x-6">
              <button onClick={() => handleScroll("aboutme")} className="cursor-pointer hover:text-gray-300">
                About Me
              </button>
              <button onClick={() => handleScroll("skills")} className="cursor-pointer hover:text-gray-300">
                Skills
              </button>
              <button onClick={() => handleScroll("projects")} className="cursor-pointer hover:text-gray-300">
                Projects
              </button>
              <button onClick={() => handleScroll("contacts")} className="cursor-pointer hover:text-gray-300">
                Contacts
              </button>
            </div>
          )}

          {/* HAMBURGER BUTTON - VISIBLE SOLO CON SCROLL */}
          <div className={`${isScrolled ? "absolute right-4 top-4" : "hidden"}`}>
            <button
              onClick={toggleMenu}
              className="bg-gray-800 text-white p-2 rounded-full cursor-pointer focus:outline-none"
            >
              {isOpen ? (
                // Icona di chiusura (X)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icona hamburger
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENU SCROLL (Quando isOpen è true) */}
      { isOpen && (
        <div
          className="absolute top-16 right-4 bg-gray-900 text-white rounded-lg w-48"
        >
          <div className="flex flex-col items-center space-y-2 py-4">
            <button onClick={() => handleScroll("aboutme")} className="cursor-pointer block px-4 py-2 hover:bg-gray-800">
              About Me
            </button>
            <button onClick={() => handleScroll("skills")} className="cursor-pointer block px-4 py-2 hover:bg-gray-800">
              Skills
            </button>
            <button onClick={() => handleScroll("projects")} className="cursor-pointer block px-4 py-2 hover:bg-gray-800">
              Projects
            </button>
            <button onClick={() => handleScroll("contacts")} className="cursor-pointer block px-4 py-2 hover:bg-gray-800">
              Contacts
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
