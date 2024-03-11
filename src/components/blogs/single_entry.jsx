import React from "react";

const SingleEntry = ({ data, className }) => {
  if (data) {
    return (
      <div className={`blogEntry card ${className}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${data.imgs[0]})` }}
        >
          <div className="layer body">
            <h2 className="title">{data.title}</h2>
            <p className="intro body">{data.intro}</p>
          </div>{" "}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SingleEntry;
