import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import Register from "./components/user/Register";

import Login from "./components/user/Login";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Dashboard from "./components/user/Dashboard";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
