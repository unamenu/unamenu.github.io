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
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
    marginTop: 10,
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
          <div className={classes.body}>
            Create and maintain smartphone friendly professional looking restaurant menus using a spreasheet.
          </div>
          <div className={classes.body}>
            <ul>
              <li>fast loading</li>
              <li>search feature</li>
              <li>select favorite items for ordering</li>
              <li>very easy to update</li>
            </ul>
          </div>
          <div className={classes.root}>
            <h3>get started for FREE</h3>
          </div>
          <div className={classes.body}>
            <a href="https://m.unamenu.com">Example menus</a>
          </div>          
        </div>
      )}
    </div>
  );
}
