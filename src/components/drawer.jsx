import React from "react";

import { Stack } from "@mui/material";

import "../styles/drawer.css";

const LateralDrawer = ({ opened }) => {
  let className = "drawer-off";
  if (opened) {
    className = "drawer-on";
  }
  return (
    <div className={className}>
      <Stack
        direction="column"
        rowGap="20px"
        justifyContent="center"
        alignContent="center"
        flexWrap="wrap"
        style={{
          color: "111111",
          textTransform: "uppercase",
          fontSize: "44px",
          height: "100%",
          width: "70%",
          transform: opened ? "translateX(0px)" : "translateX(200px)",
          transition: "transform ease 1.5s",
        }}
      >
        <p>Home</p>
        <p>About me</p>
        <p>CV</p>
        <p>Proyects</p>
        <p>Contact</p>
      </Stack>
    </div>
  );
};

export default LateralDrawer;
