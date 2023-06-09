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
            minWidth: 216,
            minHeight: 216,
            display: "inline-block",
            marginRight: "30px",
            borderTop: "3px solid blue",
          }}
          align="center"
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
                <Typography variant="h3" component="div" sx={{ fontSize: 52 }}>
                  {obj.count}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 12 }}
                  color="text.secondary"
                  align="center"
                >
                  {obj.type.toUpperCase()}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12 }}
                  style={{ color: obj.up ? "green" : "red" }}
                >
                  {obj.up ? <Up /> : <Down />} {obj.today} Today
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
