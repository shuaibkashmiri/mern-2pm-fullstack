import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
