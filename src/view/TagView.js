import React, { Component } from "react";
import repository from "../repository/Repository";
import { PostCardList } from "../component";
class TagView extends Component {
  state = {
    posts: [],
    tag: "",
  };

  constructor(props) {
    super(props);
    const { tag } = props.match.params;
    this.setPosts(tag);
  }
  componentWillReceiveProps(props, state) {
    const { tag } = props.match.params;
    this.setPosts(tag);
  }

  setPosts(tag) {
    repository
      .getPostMetaByTag(tag)
      .then(({ data: posts }) => this.setState({ posts, tag }));
  }

  render() {
    return (
      <div>
        <PostCardList posts={this.state.posts || []} />
      </div>
    );
  }
}

export default TagView;
