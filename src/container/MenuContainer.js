import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class MenuContainer extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/study">공부</Link>
        <Link to="/review">리뷰</Link>
        <Link to="/scrap">스크랩</Link>
        <Link to="/things">이것저것</Link>
      </Fragment>
    );
  }
}

export default MenuContainer;
