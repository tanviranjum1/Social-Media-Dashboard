import * as React from "react";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

const Header = ({ toggleMode, isDarkMode }) => {
  return (
    <div>
      <h1>Social Media Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Total Followers: 23,004</h3>
        <div>
          <Typography color="text.secondary">
            Dark Mode
            <Switch
              checked={isDarkMode}
              onChange={toggleMode}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;
