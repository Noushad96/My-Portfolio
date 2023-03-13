import "./App.css";

import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import MeraPortfolio from "./Components/MeraPortfolio";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="  md:pt-[20px]">
      {/* <div className="p-[20px]"> */}
      {/* NavBar */}
      <NavBar />

      {/* Home */}
      <Home />

      {/* AboutMe */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Portfolio */}
      <MeraPortfolio />

      {/* Contact */}

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
