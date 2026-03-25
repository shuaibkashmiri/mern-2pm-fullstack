import Home from "./components/pages/Home";
import "./styles/global.scss";
import Navbar from "./components/sharedCompnents/Navbar";
import Footer from "./components/sharedCompnents/Footer";

const App = () => {
  return (
    <>
      <Navbar liItem="Services" />
      {/* <h1>Hello World!</h1> */}
      <Home />

      <Footer />
    </>
  );
};

export default App;
