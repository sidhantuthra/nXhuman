import React from "react";
import PropTypes from "prop-types";
import { Menu } from "material-ui-icons";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button
} from "material-ui";
import cx from "classnames";

import headerStyle from "../../variables/styles/headerStyle.jsx";

import HeaderLinks from "./HeaderLinks";
import { Small } from "..";

function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    
    <AppBar className={classes.appBar + appBarClasses}>
      
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
         
          <Button href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />

          </IconButton>

        </Hidden>
        <small>
        Note: Please do not include real Patient Information on this application to comply with HIPAA Standards.
       </small>
      </Toolbar>
    </AppBar>
  );
  
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
