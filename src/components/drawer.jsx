import React from "react";

import { Stack } from "@mui/material";

const LateralDrawer = ({ opened, anchor }) => {
  return (
    <div
      className="drawer"
      style={{
        width: "calc(92% + 1px)",
        height: "100vh",
        marginLeft: "calc(8% - 1px)",
        backgroundColor: "#FAFAFAEE",
        position: "absolute",
        top: "0",
        left: "0",
        opacity: opened ? "100%" : "0",
        transition: "opacity 1s ease-out",
      }}
    >
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
          transition: "transform ease 2s",
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
