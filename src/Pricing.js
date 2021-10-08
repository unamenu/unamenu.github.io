import React from "react";
import { SECTION_PRICING } from "./Constants";

import { useStyles } from "./Styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";


export default function Pricing({ sectionId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_PRICING && (
        <div>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <CardHeader title="Free" />
              <Typography variant="h5" color="textPrimary">
                $0/mth
              </Typography>
              <IconButton>Get started</IconButton>
              <Typography variant="h6" color="textPrimary">
                single restaurant
              </Typography>
              <Typography variant="h6" color="textPrimary">
                up to 6 menu sections
              </Typography>
              <Typography variant="h6" color="textPrimary">
                up to 10 items per section
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <CardHeader title="Professional" />
              <Typography variant="h5" color="textPrimary">
                $10/mth (paid annually)
              </Typography>
              <Typography variant="h5" color="textPrimary">
                $12/mth (paid monthly)
              </Typography>
              <IconButton>Get started</IconButton>
              <Typography variant="h6" color="textPrimary">
                single restaurant
              </Typography>
              <Typography variant="h6" color="textPrimary">
                unlimited sections
              </Typography>
              <Typography variant="h6" color="textPrimary">
                unlimited items per section
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <CardHeader title="Enterprise" />
              <Typography variant="h5" color="textPrimary">
                contact for pricing
              </Typography>
              <IconButton>Contact us</IconButton>
              <Typography variant="h6" color="textPrimary">
                multiple menus or restaurants
              </Typography>
              <Typography variant="h6" color="textPrimary">
                unlimited sections
              </Typography>
              <Typography variant="h6" color="textPrimary">
                unlimited items per section
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
