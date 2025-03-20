import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent/>
    </Router>
  );
}

export default App;
