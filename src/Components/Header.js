import * as React from "react";
import "./Header.css";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

const Header = ({ toggleMode, isDarkMode }) => {
  return (
    <div className="top">
      <h1>Social Media Dashboard</h1>
      <div className="headerContainer">
        <Typography color="text.primary" sx={{ fontSize: "12px" }}>
          Total Followers: 23,004
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: "12px" }}>
          Dark Mode
          <Switch
            checked={isDarkMode}
            onChange={toggleMode}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Typography>
      </div>
    </div>
  );
};

export default Header;
