import React from "react";
import { SECTION_ABOUT } from "./Constants";

import { useStyles } from "./Styles";

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
