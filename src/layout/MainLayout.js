import React, { Component } from "react";
import "./style.css";

class MainLayout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header-zone">nooblog.io</div>
        <div className="body-zone">
          <div className="menu">menu</div>
          <div className="content-view">menu</div>
          <div className="summary">menu</div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
