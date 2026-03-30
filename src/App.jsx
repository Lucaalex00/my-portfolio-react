import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import HackerTerminal from "./pages/errorPage/HackerTerminal";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";


function AppWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <NavbarComponent />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<HackerTerminal />} />
      </Routes>

      {!isHomePage && <FooterComponent />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
