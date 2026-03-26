import Home from "./components/pages/Home";
import "./styles/global.scss";
import Navbar from "./components/sharedCompnents/Navbar";
import Footer from "./components/sharedCompnents/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar liItem="Services" />
        {/* <h1>Hello World!</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
