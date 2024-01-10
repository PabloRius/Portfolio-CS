import React from "react";
import variables from "../variables/variables";

const Footer = () => {
  console.log(variables.headerHeight);
  const header_style = {
    width: "100%",
    height: variables.footerHeight,
  };
  return (
    <div style={header_style}>
      <p>Footer</p>
    </div>
  );
};

export default Footer;
