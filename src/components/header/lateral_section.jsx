import React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "../../styles/lateral_section.css";

const LateralSection = ({ toggleDrawer }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "6%",
        borderRight: "solid 1px #BBBBBB",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "0 10%",
        }}
      >
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
        <div
          style={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              transform: "rotate(270deg)",
              top: "45%",
              left: "-30px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                color: "#111111",
                fontSize: "24px",
              }}
              className="name"
            >
              Pablo García Rius
            </p>
            <p
              style={{
                color: "#777777",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              Software Engineer
            </p>
          </div>
        </div>
        <div style={{ height: "10%" }}></div>
      </Box>
    </div>
  );
};

export default LateralSection;
