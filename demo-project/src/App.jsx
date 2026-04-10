import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import Home from "./pages/Home.jsx";

import Gallery from "./pages/Gallery.jsx";
import "./styles/global.css";
// import Contact from "./pages/Contact.jsx";
const Contact = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import("./pages/Contact.jsx"));
      }, 3000);
    }),
);
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
