/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import CircularProgressbar from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { render } from "react-dom";
import { StitchClientFactory } from "mongodb-stitch";
import { browserHistory, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import {
  withStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "material-ui";

import { HeaderLinks } from "../../components";

import sidebarStyle from "../../variables/styles/sidebarStyle.jsx";

const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { classes, color, logo, image, logoText, routes } = props;
  var links = (
    
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect) return null;
        const listItemClasses = cx({
          [" " + classes[color]]: activeRoute(prop.path)
        });
        const whiteFontClasses = cx({
          [" " + classes.whiteFont]: activeRoute(prop.path)
        });
        return (
             
          <NavLink
            to={prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
            

          </NavLink>
        );
      })}
    </List>
    
  );
  var brand = (
    <div className={classes.logo}>
    
      <a href="login" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src="favicon.ico" />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.

          }}
          
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
          
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
          
        </Drawer>
      </Hidden>
    
    </div>
  

        )
Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};
  

}

export default withStyles(sidebarStyle)(Sidebar)
