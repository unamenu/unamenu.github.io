import React from "react";
import { SECTION_MAIN } from "./Constants";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  body: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: 20,
    marginRight: 20
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

export default function Main({ sectionId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_MAIN && (
        <div>
          <div className={classes.root}>
            <h3>Easy custom restaurant menus</h3>
          </div>
          <div className={classes.root}>
            <h3>get started for free</h3>
          </div>
          <div className={classes.body}>
            Create and maintain smartphone friendly professional looking restaurant menus via a spreasheet.
          </div>
        </div>
      )}
    </div>
  );
}
