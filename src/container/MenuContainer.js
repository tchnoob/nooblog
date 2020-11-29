import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class MenuContainer extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/공부">공부</Link>
        <Link to="/리뷰">리뷰</Link>
        <Link to="/스크랩">스크랩</Link>
        <Link to="/이것저것">이것저것</Link>
      </Fragment>
    );
  }
}

export default MenuContainer;
