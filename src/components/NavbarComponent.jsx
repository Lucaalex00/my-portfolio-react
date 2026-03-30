import React, { useState, useEffect, useRef } from "react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false);
      }

      if (isOpen && window.innerWidth <= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ${
        !isScrolled
          ? "bg-black/45 backdrop-blur-md border-b border-white/10 text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          {!isScrolled && (
            <a
              onClick={() => handleScroll("hero")}
              className="text-xl md:text-2xl font-semibold tracking-wide cursor-pointer text-white hover:text-white/70 transition duration-300 select-none"
            >
              Luca Cirio
            </a>
          )}

          {/* MENU DESKTOP */}
          {!isScrolled && (
            <div className="hidden md:flex items-center space-x-2">
              {["aboutme", "skills", "projects", "contacts"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className="px-4 py-2 rounded-full text-sm tracking-wide text-white/85 hover:text-white hover:bg-white/8 border border-transparent hover:border-white/10 transition-all duration-300"
                >
                  {item === "aboutme"
                    ? "About Me"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}

          {/* HAMBURGER */}
          <div className={`${isScrolled ? "absolute right-4 top-4" : "hidden"}`}>
            <button
              onClick={toggleMenu}
              className="bg-black/55 backdrop-blur-md border border-white/10 text-white p-3 rounded-full cursor-pointer focus:outline-none shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-black/70 hover:scale-105 transition-all duration-300"
            >
              {isOpen ? (
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

      {/* MENU OVERLAY */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full min-h-[38vh] bg-black/88 backdrop-blur-xl border-b border-white/10 text-white flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 text-xl">
          <button
            onClick={() => handleScroll("aboutme")}
            className="px-6 py-2 rounded-full text-white/85 hover:text-white hover:bg-white/8 transition-all duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="px-6 py-2 rounded-full text-white/85 hover:text-white hover:bg-white/8 transition-all duration-300"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="px-6 py-2 rounded-full text-white/85 hover:text-white hover:bg-white/8 transition-all duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contacts")}
            className="px-6 py-2 rounded-full text-white/85 hover:text-white hover:bg-white/8 transition-all duration-300"
          >
            Contacts
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;