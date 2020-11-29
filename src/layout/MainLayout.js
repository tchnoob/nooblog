import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { ContentContainer, MenuContainer } from "../container";
import AppBarView from "../component/AppBarView";
import "./style.css";

@inject("store")
@observer
class MainLayout extends Component {
  render() {
    console.log("@render", this, this.props.store.menuVisible);
    return (
      <div className="layout">
        <AppBarView />
        {this.props.store.menuVisible && (
          <div className={`header-zone text-selection-disabled`}>
            <MenuContainer />
          </div>
        )}
        <div
          className="body-zone custom-scrollbar"
          onScroll={this.props.store.onScroll}
        >
          <div className="content-view">
            <ContentContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
