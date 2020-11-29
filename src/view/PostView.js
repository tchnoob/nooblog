import React from "react";

const PostView = (props) => {
  const { query } = props.match.params;
  return <div>Post : {query}</div>;
};

export default PostView;
