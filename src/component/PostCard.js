import React from "react";
import "./style.css";

const PostCard = ({ context: { title, text }, index }) => {
  return (
    <div className="post-card text-selection-disabled">
      <div className="image"></div>
      <div className="title">{title}</div>
      <div className="content">{text}</div>
    </div>
  );
};

export default PostCard;
