import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./style.css";

const PostCard = ({
  context: { title, content, id, date, image },
  index,
  ...props
}) => {
  const { setTitle } = props;
  return (
    <Link
      className="post-card text-selection-disabled"
      as="div"
      to={`/post/${id}`}
      onClick={() => setTitle(title)}
    >
      <div className="image">
        <img className="image" src={image} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="date">{date}</div>
    </Link>
  );
};

export default inject(({ store }) => ({ setTitle: store.setTitle }))(PostCard);
