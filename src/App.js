import "./App.css";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import { ReactComponent as Fb } from "./images/icon-facebook.svg";
import { ReactComponent as Tweet } from "./images/icon-twitter.svg";
import { ReactComponent as Insta } from "./images/icon-instagram.svg";
import { ReactComponent as Ytube } from "./images/icon-youtube.svg";
import React, { useState } from "react";

const elements = [
  {
    icon: <Fb />,
    name: "@nathanf",
    count: "1987",
    type: "Followers",
    today: 12,
    up: true,
  },
  {
    icon: <Tweet />,
    name: "@nathanf",
    count: "1044",
    type: "Followers",
    today: 99,
    up: true,
  },
  {
    icon: <Insta />,
    name: "@realnathanf",
    count: "11K",
    type: "Followers",
    today: 1099,
    up: true,
  },
  {
    icon: <Ytube />,
    name: "Nathan F.",
    count: "8239",
    type: "Subscribers",
    today: 144,
    up: false,
  },
];

const secondelements = [
  { icon: <Fb />, type: "Page Views", count: "87", percent: 3, up: true },
  { icon: <Fb />, type: "Likes", count: "52", percent: 2, up: false },
  { icon: <Insta />, type: "Likes", count: "5462", percent: 2257, up: true },
  {
    icon: <Insta />,
    type: "Profile Views",
    count: "52k",
    percent: 1375,
    up: true,
  },
  { icon: <Tweet />, type: "Retweets", count: "117", percent: 303, up: true },
  { icon: <Tweet />, type: "Likes", count: "507", percent: 553, up: true },
  { icon: <Ytube />, type: "Likes", count: "107", percent: 19, up: false },
  {
    icon: <Ytube />,
    type: "Total Views",
    count: "1407",
    percent: 12,
    up: false,
  },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div style={{ width: "77%", margin: "auto" }}>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <PanelOne elements={elements} key={uuidv4()} />
        <PanelTwo secondelements={secondelements} key={uuidv4()} />
      </div>
    </div>
  );
}

export default App;
