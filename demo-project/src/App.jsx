import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import Home from "./pages/Home.jsx";

import Gallery from "./pages/Gallery.jsx";
import "./styles/global.css";
import Contact from "./pages/Contact.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
