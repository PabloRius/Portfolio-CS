import React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ toggleDrawer, className }) => {
  return (
    <div className={className}>
      <div
        style={{
          height: "10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <IconButton
          aria-label="Expand lateral menu"
          style={{
            width: "fit-content",
            height: "fit-content",
            color: "#111111",
          }}
          onClick={() => {
            toggleDrawer();
          }}
        >
          <MenuIcon style={{ margin: "auto" }} />
        </IconButton>
      </div>
      <div className="centerSideBar">
        <div className="centerSideBarTitle">
          <h1>Pablo García Rius</h1>
          <p className="mobileOnly">|</p>
          <h4>Software Engineer</h4>
        </div>
      </div>
      <div style={{ height: "10%" }}></div>
    </div>
  );
};

export default Sidebar;
