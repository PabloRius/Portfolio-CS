import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialIcon from "./social_icon";

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
        <SocialIcon
          icon={<InstagramIcon fontSize={"large"} sx={{ color: "#EF426F" }} />}
          href={"https://www.instagram.com/pgriuss/"}
        />
        <SocialIcon
          icon={<GitHubIcon fontSize={"large"} sx={{ color: "#333333" }} />}
          href={"https://github.com/PabloRius"}
        />
        <SocialIcon
          icon={<LinkedInIcon fontSize={"large"} sx={{ color: "#0077b5" }} />}
          href={"https://www.linkedin.com/in/pablo-rius"}
        />
      </div>
    </div>
  );
};

export default PhotoSection;
