import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/dev-hire.css";

const DevHire = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default DevHire;
