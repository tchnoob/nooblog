import React, { Component } from "react";

const PostView = (props) => {
  const { query } = this.props.match.params;
  return <div>Post : {query}</div>;
};

export default PostView;
