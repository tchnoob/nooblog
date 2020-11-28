import React from "react";
import "./style.css";

const MenuItem = ({ children, path }) => {
  return (
    <a className="menu-item" href={path}>
      {children}
    </a>
  );
};

export default MenuItem;
