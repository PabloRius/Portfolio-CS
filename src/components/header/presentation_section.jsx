import React, { useState } from "react";

import { Box } from "@mui/material";

const PresentationSection = () => {
  const [mailIsHovered, setMailIsHovered] = useState(false);

  function handleMouseOverMail() {
    setMailIsHovered(true);
  }

  function handleMouseOutMail() {
    setMailIsHovered(false);
  }

  function handleMailRedirect() {
    window.location.href = "mailto:pablogrius@gmail.com";
  }

  return (
    <div style={{ height: "100%", width: "47%" }}>
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
              style={{
                color: "#111111",
                borderBottom: mailIsHovered
                  ? "solid #111111 2px"
                  : "solid #BBBBBB 2px",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
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
            Hello. I'm Pablo.
          </h1>
          <p style={{ color: "#777777", fontSize: "15px" }}>
            I'm a recent Computer Science graduate currently embarking on my
            professional journey as an intern at NTT Data. I'm passionate about
            soaking up knowledge in the dynamic realm of software development
            and project management. My ultimate dream is to traverse the globe
            with my work, continuously expanding my skill set as a software
            engineer and contributing meaningful value to the world. Join me on
            this exciting adventure!
          </p>
        </div>
      </Box>
    </div>
  );
};

export default PresentationSection;
