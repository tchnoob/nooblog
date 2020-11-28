import React, { Component, Fragment } from "react";
import { MenuItem } from "../component";
class MenuContainer extends Component {
  render() {
    return (
      <Fragment>
        <MenuItem path="/study">공부</MenuItem>
        <MenuItem path="/review">리뷰</MenuItem>
        <MenuItem path="/scrap">스크랩</MenuItem>
        <MenuItem path="/things">이것저것</MenuItem>
      </Fragment>
    );
  }
}

export default MenuContainer;
