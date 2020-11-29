import React, { Component } from "react";
import {
  ContentContainer,
  MenuContainer,
  SummaryContainer,
} from "../container";
import AppBarView from "../component/AppBarView";
import "./style.css";

class MainLayout extends Component {
  render() {
    return (
      <div className="layout">
        <AppBarView />
        <div className="header-zone text-selection-disabled">
          <MenuContainer />
        </div>
        <div className="body-zone custom-scrollbar">
          {/* <div className="menu"></div> */}
          <div className="content-view">
            <ContentContainer />
          </div>
          {/* <div className="summary">
            <SummaryContainer />
          </div> */}
        </div>
      </div>
    );
  }
}

export default MainLayout;
