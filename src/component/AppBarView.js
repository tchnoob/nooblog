import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { observer, inject } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./style.css";

// @inject("store")
// @observer
class AppBarView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.store = props.store;
  // }

  render() {
    return (
      <AppBar position="static" className="text-selection-disabled">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className="IconButton"
            color="inherit"
            aria-label="menu"
            onClick={this.props.store.toggleMenuView}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography
              name="title"
              variant="h6"
              color="inherit"
              style={{ cursor: "pointer" }}
            >
              NOOBLOG
            </Typography>
          </Link>
          <Typography
            variant="h5"
            color="inherit"
            style={{ marginLeft: "130px" }}
          >
            {this.props.store.title}
          </Typography>

          <div className="app-bar-search">
            <SearchIcon className="search-icon" />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default inject("store")(observer(AppBarView));
