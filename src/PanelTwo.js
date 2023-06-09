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
      <Typography
        color="text.secondary"
        sx={{ marginBottom: "20px", fontWeight: 700 }}
      >
        Overview - Today
      </Typography>
      {secondelements.map((obj) => (
        <Box
          component="span"
          sx={{
            minWidth: 216,
            minHeight: 80,
            display: "inline-block",
            marginRight: "30px",
            marginBottom: "10px",
          }}
        >
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 600 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {obj.type}
                  </Typography>
                  {obj.icon}
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontSize: 32 }}>{obj.count}</Typography>
                  <Typography
                    sx={{ fontSize: 12, pt: 2 }}
                    style={{ color: obj.up ? "green" : "red" }}
                  >
                    {obj.up ? <Up /> : <Down />} {obj.percent}%
                  </Typography>
                </div>
              </CardContent>
            </React.Fragment>
          </Card>
        </Box>
      ))}
    </div>
  );
}

export default PanelTwo;
