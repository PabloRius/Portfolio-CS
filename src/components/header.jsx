import React from "react";

import "../styles/header.css";

import variables from "../variables/variables";

const Header = () => {
  console.log(variables.headerHeight);
  const header_style = {
    width: "100%",
    height: variables.headerHeight,
  };
  return (
    <div style={header_style}>
      <p>Header</p>
    </div>
  );
};

export default Header;
