import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./style.css";

const PostCard = ({ context: { title, text, id }, index, ...props }) => {
  const { setTitle } = props;
  return (
    <Link
      className="post-card text-selection-disabled"
      as="div"
      to={`/post/${title}`}
      onClick={() => setTitle(title)}
    >
      <div className="image"></div>
      <div className="title">{title}</div>
      <div className="content">{text}</div>
    </Link>
  );
};

export default inject(({ store }) => ({ setTitle: store.setTitle }))(PostCard);
