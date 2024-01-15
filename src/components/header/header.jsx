import React, { useState } from "react";

import LateralDrawer from "../drawer";

import "../../styles/header.css";

import variables from "../../variables/variables";

import LateralSection from "./lateral_section";
import PresentationSection from "./presentation_section";
import PhotoSection from "./photo_section";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  const header_style = {
    width: "100%",
    height: variables.headerHeight,
  };

  return (
    <div style={header_style}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LateralSection toggleDrawer={toggleDrawer} />
        <PresentationSection />
        <PhotoSection />
      </div>
      {/* <LateralDrawer opened={opened} /> */}
    </div>
  );
};

export default Header;
