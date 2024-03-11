import React from "react";

import DownloadCV from "./Download_cv";

const HeaderLeft = ({ className }) => {
  function handleMailRedirect() {
    window.location.href = "mailto:pablogrius@gmail.com";
  }

  return (
    <div className={className}>
      <div className="presentationEmail">
        <h4>Email: </h4>
        <h5 onClick={handleMailRedirect}>pablogrius@gmail.com</h5>
      </div>
      <div className="presentationText" style={{ height: "auto" }}>
        <h2>Hello. I'm Pablo.</h2>
        <p>
          I'm a recent Computer Science graduate currently embarking on my
          professional journey as an intern at NTT Data. I'm passionate about
          soaking up knowledge in the dynamic realm of software development and
          project management. My ultimate dream is to traverse the globe with my
          work, continuously expanding my skill set as a software engineer and
          contributing meaningful value to the world. Join me on this exciting
          adventure!
        </p>
      </div>
      <div className="presentationCV">
        <DownloadCV />
      </div>
    </div>
  );
};

export default HeaderLeft;
