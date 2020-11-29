import React, { useState } from "react";
import repository from "../repository/Repository";

const PostView = (props) => {
  const [post, setContent] = useState(null);
  const { query } = props.match.params;
  if (!post)
    repository.getPostById(query).then(({ data }) => setContent(data[0]));
  return (
    <div>
      Post : {query}
      <div>{post && post.content}</div>
    </div>
  );
};

export default PostView;
