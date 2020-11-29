import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const PostCard = ({ context: { title, text, id }, index }) => {
  return (
    <Link
      className="post-card text-selection-disabled"
      as="div"
      // onClick={() => Functions.routeTo(`/post/${title}`)}
      to={`/post/${title}`}
    >
      <div className="image"></div>
      <div className="title">{title}</div>
      <div className="content">{text}</div>
    </Link>
  );
};

export default PostCard;
