import "./App.css";
import PanelOne from "./Components/PanelOne";
import PanelTwo from "./Components/PanelTwo";
import Header from "./Components/Header";

import React, { useState } from "react";
import { elements, secondelements } from "./data.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode page" : "light-mode page"}>
      <div className="container">
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <PanelOne elements={elements} />
        <PanelTwo secondelements={secondelements} />
      </div>
    </div>
  );
}

export default App;
