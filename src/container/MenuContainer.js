import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Divider from "@material-ui/core/Divider";
import { withAuth0 } from "@auth0/auth0-react";
import "../layout/style.css";

class MenuContainer extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="menu-container">
        <div className="menu section">
          <Link to="/공부">공부</Link>
          <Link to="/리뷰">리뷰</Link>
          <Link to="/스크랩">스크랩</Link>
          <Link to="/이것저것">이것저것</Link>
        </div>
        <div
          className="function section"
          style={{ display: !isAuthenticated ? "block" : "none" }}
        >
          <CreateOutlinedIcon />
        </div>
      </div>
    );
  }
}

export default withAuth0(MenuContainer);
