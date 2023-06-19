import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactComponent as Up } from "../images/icon-up.svg";
import { ReactComponent as Down } from "../images/icon-down.svg";
import { v4 as uuidv4 } from "uuid";
import "./PanelTwo.css";

function PanelTwo({ secondelements }) {
  return (
    <div>
      <Typography
        color="text.secondary"
        sx={{ marginBottom: "20px", fontWeight: 700 }}
      >
        Overview - Today
      </Typography>
      <div className="paneltwo-container">
        {secondelements.map((obj) => (
          <Box
            component="span"
            sx={{
              minWidth: 216,
              minHeight: 80,
              display: "inline-block",
              marginBottom: "10px",
            }}
            key={uuidv4()}
          >
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <div className="shared">
                    <Typography
                      sx={{ fontSize: 14, fontWeight: 600 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {obj.type}
                    </Typography>
                    {obj.icon}
                  </div>

                  <div className="shared">
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
    </div>
  );
}

export default PanelTwo;
