import React from "react";
import { PostCard } from "../component";
import "./style.css";

const PostCardList = ({ context, match }) => {
  const { category } = match.params;
  const cards = Array.from({ length: 20 }).map((r, i) => (
    <PostCard
      key={`postcard${i}`}
      index={i}
      context={{
        title: `Post ${i}`,
        image: null,
        text: `Post content ${i}`,
      }}
    />
  ));
  return (
    <div className="post-container">
      <div className="post-list-category">{category}</div>
      <div className="post-list">{cards}</div>
    </div>
  );
};

export default PostCardList;
