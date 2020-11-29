import React from "react";
import { PostCard } from "../component";
import "./style.css";

const PostCardList = ({ posts = [] }) => {
  const cards = posts
    ? posts.map((post, i) => (
        <PostCard
          key={`postcard${i}`}
          index={i}
          context={{
            ...post,
          }}
        />
      ))
    : [];
  return (
    <div className="post-container">
      {/* <div className="post-list-category">{category}</div> */}
      <div className="post-list">{cards}</div>
    </div>
  );
};

export default PostCardList;
