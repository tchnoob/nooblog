import React, { Component } from "react";
import { MenuItem } from "../component";
class MenuContainer extends Component {
  render() {
    return (
      <div>
        <MenuItem path="/post/1">1</MenuItem>
        <br />
        <MenuItem path="/post/2">2</MenuItem>
        <br />
        <MenuItem path="/post/3">3</MenuItem>
        <br />
      </div>
    );
  }
}

export default MenuContainer;
