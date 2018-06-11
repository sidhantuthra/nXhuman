import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import footerStyle from "../../variables/styles/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      
      <div className={classes.container}>
          
        <div className={classes.left}>
          
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="caseoverview" className={classes.block}>
                Case Overview
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>

              <a href="patientchart" className={classes.block}>
                Patient Chart
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="dialogue" className={classes.block}>
                Dialogue
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="review" className={classes.block}>
                Summary
              </a>
            </ListItem>
          
          </List>
        </div>
        <p className={classes.right}>
        </p>
      </div>
      
    </footer>
  )
}



Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
