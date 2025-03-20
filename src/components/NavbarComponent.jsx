import React, { useState, useEffect, useRef } from "react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Stato per aprire/chiudere il menu
  const [isScrolled, setIsScrolled] = useState(false); // Stato per rilevare se l'utente ha scrollato
  const menuRef = useRef(null); // Riferimento per il menu

  // Funzione per aprire/chiudere il menu
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
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
        setIsOpen(false); // Chiude il menu quando torna in cima
      }

      // Chiudiamo il menu su dispositivi mobili se l'utente scrolla
      if (isOpen && window.innerWidth <= 768) {
        setIsOpen(false); // Chiudi il menu quando scrolli sul dispositivo mobile
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    // Pulizia dell'evento quando il componente è smontato
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [isOpen]);

  // Funzione per chiudere il menu quando si clicca fuori
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Chiude il menu se il click è fuori
    }
  };

  // Aggiungiamo il listener per il click fuori dal menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Pulizia del listener quando il componente viene smontato
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
              <button onClick={() => handleScroll("aboutme")} className="cursor-pointer hover:text-gray-600 duration-500">
                About Me
              </button>
              <button onClick={() => handleScroll("skills")} className="cursor-pointer hover:text-gray-600 duration-500">
                Skills
              </button>
              <button onClick={() => handleScroll("projects")} className="cursor-pointer hover:text-gray-600 duration-500">
                Projects
              </button>
              <button onClick={() => handleScroll("contacts")} className="cursor-pointer hover:text-gray-600 duration-500">
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
      <div
        ref={menuRef} // Riferimento al menu per il click fuori
        className={`fixed top-0 left-0 w-full min-h-1/4 py-3 bg-gray-900 text-white flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-90"
            : "-translate-y-full opacity-0"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✕
        </button>

        <div className="flex flex-col space-y-6 text-xl">
          <button
            onClick={() => handleScroll("aboutme")}
            className="cursor-pointer hover:text-gray-600 duration-500"
          >
            About Me
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="cursor-pointer hover:text-gray-600 duration-500"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="cursor-pointer hover:text-gray-600 duration-500"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contacts")}
            className="cursor-pointer hover:text-gray-600 duration-500"
          >
            Contacts
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
