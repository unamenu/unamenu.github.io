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
  body: {
    minWidth: 275,
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
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
      {sectionId === SECTION_CONTACT && (
        <div className={classes.root}>
          <div className={classes.root}>
            {sectionId === SECTION_CONTACT && (
              <div>
                <div className={classes.root}>
                  <h3>Contact us</h3>                  
                </div>
                <div className={classes.body}>
                  Email us at info @ moscaville.com
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
