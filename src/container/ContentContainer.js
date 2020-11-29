import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Post, TagView } from "../view";

class ContentContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:tag" component={TagView} />
        <Route path="/post/:query" component={Post} />
      </Switch>
    );
  }
}
export default ContentContainer;
