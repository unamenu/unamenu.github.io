import React from "react";
import { SECTION_CONTACT } from "./Constants";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Contact({ sectionId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.root}>
        {sectionId === SECTION_CONTACT && (
          <div>
            <div className={classes.root}>
              <h2>Contact us</h2>
            </div>
            <div className={classes.root}></div>
          </div>
        )}
      </div>
    </div>
  );
}
