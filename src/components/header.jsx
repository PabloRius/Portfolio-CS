import React, { useState } from "react";

import { Grid, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import LateralDrawer from "./drawer";

import "../styles/header.css";

import variables from "../variables/variables";

const Header = () => {
  const [mailIsHovered, setMailIsHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const anchor = "left";

  function handleMouseOverMail() {
    setMailIsHovered(true);
  }

  function handleMouseOutMail() {
    setMailIsHovered(false);
  }

  function handleMailRedirect() {
    window.location.href = "mailto:pablogrius@gmail.com";
  }

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  const header_style = {
    width: "100%",
    height: variables.headerHeight,
  };
  const email_style = {
    color: "#111111",
    borderBottom: mailIsHovered ? "solid #111111 2px" : "solid #BBBBBB 2px",
    textTransform: "uppercase",
    cursor: "pointer",
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
        <div
          style={{
            height: "100%",
            width: "8%",
            borderRight: "solid 1px #BBBBBB",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: "5% 10%",
            }}
          >
            <div
              style={{
                height: "10%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton
                aria-label="Expand lateral menu"
                color="#111111"
                style={{ width: "fit-content", height: "fit-content" }}
                onClick={() => {
                  toggleDrawer();
                }}
              >
                <MenuIcon style={{ margin: "auto" }} />
              </IconButton>
            </div>
            <div style={{ height: "80%" }}></div>
            <div style={{ height: "10%" }}></div>
            {/* <Drawer anchor="left" open="false"></Drawer> */}
          </Box>
        </div>
        <div style={{ height: "100%", width: "46%" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: "0 10%",
            }}
          >
            <div style={{ height: "20%" }}>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: "20px",
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "5px",
                  alignContent: "center",
                  flexWrap: "wrap",
                  height: "60%",
                }}
              >
                <p style={{ color: "#BBBBBB", textTransform: "uppercase" }}>
                  Email:{" "}
                </p>
                <p
                  style={email_style}
                  onMouseOver={handleMouseOverMail}
                  onMouseOut={handleMouseOutMail}
                  onClick={handleMailRedirect}
                >
                  pablogrius@gmail.com
                </p>
              </div>
            </div>
            <div style={{ height: "50%" }}>
              <h1
                style={{
                  color: "#111111",
                  fontWeight: "bold",
                  fontSize: "44px",
                  lineHeight: "52px",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                }}
              >
                Hello. I'm Pablo García Rius.
              </h1>
              <p style={{ color: "#777777", fontSize: "15px" }}>
                I'm a recent Computer Science graduate currently embarking on my
                professional journey as an intern at NTT Data. I'm passionate
                about soaking up knowledge in the dynamic realm of software
                development and project management. My ultimate dream is to
                traverse the globe with my work, continuously expanding my skill
                set as a software engineer and contributing meaningful value to
                the world. Join me on this exciting adventure!
              </p>
            </div>
          </Box>
        </div>
        <div style={{ height: "100%", width: "46%" }}></div>
      </div>
      <LateralDrawer opened={opened} anchor={anchor} />
    </div>
  );
};

export default Header;
