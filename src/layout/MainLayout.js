import React, { Component } from "react";
import {
  ContentContainer,
  MenuContainer,
  SummaryContainer,
} from "../container";
import "./style.css";

class MainLayout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header-zone">nooblog.io</div>
        <div className="body-zone">
          <div className="menu">
            <MenuContainer />
          </div>
          <div className="content-view">
            <ContentContainer />
          </div>
          <div className="summary">
            <SummaryContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;