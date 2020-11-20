import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class AppBarView extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className="IconButton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            NOOBLOG
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppBarView;
