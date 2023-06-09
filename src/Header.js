import * as React from "react";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

const Header = ({ toggleMode, isDarkMode }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{ marginTop: "20px" }}>Social Media Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="text.primary" sx={{ fontSize: "12px" }}>
          Total Followers: 23,004
        </Typography>
        <div>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "12px", marginRight: "50px" }}
          >
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
