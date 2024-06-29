import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Home from "./containers/home";
import About from "./containers/about";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar handleToggleIcon={handleToggleIcon} toggleIcon={toggleIcon} />
      

      {/* main page content */}

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={ <Home toggleIcon={toggleIcon} />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
