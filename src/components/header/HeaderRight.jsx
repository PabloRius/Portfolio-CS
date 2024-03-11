import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialIcon from "./social_icon";

const HeaderRight = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: "url(/Profile.jpeg)",
      }}
    >
      <div className="socialIcons">
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

export default HeaderRight;
