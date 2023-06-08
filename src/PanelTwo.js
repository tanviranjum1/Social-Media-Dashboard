import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactComponent as Up } from "./images/icon-up.svg";
import { ReactComponent as Down } from "./images/icon-down.svg";

function PanelTwo({ secondelements }) {
  return (
    <div>
      <Typography color="text.secondary">Overview - Today</Typography>
      {secondelements.map((obj) => (
        <Box
          component="span"
          sx={{
            minWidth: 255,
            minHeight: 125,
            display: "inline-block",
            mx: "2px",
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
                  {obj.name}
                  {obj.icon}
                </Typography>
                <Typography variant="h5" component="div">
                  {obj.count}
                </Typography>
                {obj.up == true ? <Up /> : <Down />}
                <Typography sx={{ mb: 1.5 }} color="green">
                  {obj.percent}%
                </Typography>
                {/* <Typography variant="body2">+ {obj.today} Today</Typography> */}
              </CardContent>
            </React.Fragment>
          </Card>
        </Box>
      ))}
    </div>
  );
}

export default PanelTwo;
