import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Post } from "../view";
import { PostCardList } from "../component";

class ContentContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:query" component={Post} />
        <Route path="/:category" component={PostCardList} />
      </Switch>
    );
  }
}
export default ContentContainer;
