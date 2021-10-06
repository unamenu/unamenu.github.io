import React from "react";
import { SECTION_ABOUT } from "./Constants";

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

export default function About({ sectionId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_ABOUT && (
        <div>
          <div className={classes.root}>
            <h3>About unamenu</h3>
          </div>
          <div className={classes.root}></div>
        </div>
      )}
    </div>
  );
}
