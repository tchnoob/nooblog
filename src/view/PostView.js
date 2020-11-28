import React, { Component } from "react";

class PostView extends Component {
  render() {
    const { query } = this.props.match.params;
    return <div>Post : {query}</div>;
  }
}

export default PostView;
