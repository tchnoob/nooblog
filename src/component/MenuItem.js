import React from "react";
// import { Link } from "react-router-dom";
// import React, { Component } from "react";

const MenuItem = ({ children, path }) => {
  return <div to={path}>{children}</div>;
};

export default MenuItem;
