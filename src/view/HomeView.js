import React, { Component } from "react";
import repository from "../repository/Repository";
import { PostCardList } from "../component";
class HomeView extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    repository
      .getRecentPost(7)
      .then(({ data: posts }) => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        home
        <PostCardList posts={this.state.posts || []} />
      </div>
    );
  }
}

export default HomeView;
