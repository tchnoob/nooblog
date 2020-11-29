import React from "react";
import "./style.css";

const PostCard = ({ context: { title, text, id }, index }) => {
  const routeTo = (path) => {
    window.history.pushState(
      null,
      null,
      `${window.location.origin}/post/${path}`
    );
    window.history.go();
  };
  return (
    <div
      className="post-card text-selection-disabled"
      onClick={() => routeTo(title)}
    >
      <div className="image"></div>
      <div className="title">{title}</div>
      <div className="content">{text}</div>
    </div>
  );
};

export default PostCard;
