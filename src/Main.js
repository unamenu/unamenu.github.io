import React from "react";
import { SECTION_MAIN } from "./Constants";

import { useStyles } from "./Styles";

import unamenumobileexample2 from "./unamenu-mobile-example2.svg";

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
            Create and maintain smartphone friendly professional looking
            restaurant menus using a spreasheet.
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
            <img src={unamenumobileexample2} className={classes.img} alt="example" width="75%" />
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
