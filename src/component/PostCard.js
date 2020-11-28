import React from "react";
import "./style.css";

const PostCard = ({ context: { title, text }, index }) => {
  return (
    <div className="post-card">
      #{index} <br></br>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default PostCard;
