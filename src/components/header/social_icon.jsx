import React from "react";

import IconButton from "@mui/material/IconButton";

const SocialIcon = ({ icon, href }) => {
  return (
    <IconButton
      href={href}
      target="_blank"
      size="large"
      style={{
        border: "solid 1.5px #111111",
        borderRadius: "0",
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow: "0px 0px 10px -5px rgba(0,0,0,0.75)",
      }}
    >
      {icon}
    </IconButton>
  );
};

export default SocialIcon;
