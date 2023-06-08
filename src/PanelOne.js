import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactComponent as Up } from "./images/icon-up.svg";
import { ReactComponent as Down } from "./images/icon-down.svg";

function PanelOne({ elements }) {
  return (
    <div>
      {elements.map((obj) => (
        <Box
          component="span"
          sx={{
            minWidth: 255,
            minHeight: 216,
            display: "inline-block",
            mx: "2px",
            borderTop: "3px solid red",
          }}
        >
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {obj.icon}
                  {obj.name}
                </Typography>
                <Typography variant="h3" component="div">
                  {obj.count}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {obj.type.toUpperCase()}
                </Typography>
                <Typography variant="body2">
                  {obj.up == true ? <Up /> : <Down />} {obj.today} Today
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
        </Box>
      ))}
    </div>
  );
}

export default PanelOne;
