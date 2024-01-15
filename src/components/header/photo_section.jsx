import React from "react";

import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const PhotoSection = () => {
  return (
    <div style={{ height: "100%", width: "47%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflowY: "hidden",
          backgroundImage: "url(/Profile.jpeg)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "row-reverse",
          columnGap: "10px",
        }}
      >
        <IconButton
          href="https://www.instagram.com/pgriuss/"
          target="_blank"
          style={{ border: "solid 1px #111111", borderRadius: "0" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://github.com/PabloRius"
          target="_blank"
          style={{ border: "solid 1px #111111", borderRadius: "0" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/pablo-rius"
          target="_blank"
          style={{ border: "solid 1px #111111", borderRadius: "0" }}
        >
          <LinkedInIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default PhotoSection;
