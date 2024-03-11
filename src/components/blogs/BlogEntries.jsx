import React, { useEffect, useState } from "react";

import { IconButton } from "@mui/material";

import Back from "@mui/icons-material/ArrowBackIos";
import Forward from "@mui/icons-material/ArrowForwardIos";

import SingleEntry from "./single_entry";

import { blog_entries } from "../../mock/data";

const BlogEntries = () => {
  const [cardsIndex, setIndex] = useState([
    0,
    blog_entries.length > 1 ? 1 : 0,
    blog_entries.length > 2
      ? blog_entries.length - 1
      : blog_entries.length === 2
      ? 1
      : 0,
  ]);
  const [autoShift, setAutoShift] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoShift) {
        shiftRight();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [autoShift]);

  useEffect(() => {
    console.log(cardsIndex);
  }, [cardsIndex]);

  const delayAutoShift = () => {
    setAutoShift(false);
    setTimeout(() => {
      setAutoShift(true);
    }, 10000);
  };

  const shiftRight = () => {
    setIndex((prevIndex) => {
      return [
        prevIndex[0] === 0 ? blog_entries.length - 1 : prevIndex[0] - 1,
        prevIndex[0],
        prevIndex[1],
      ];
    });
  };

  const shiftLeft = () => {
    setIndex((prevIndex) => {
      return [
        prevIndex[1],
        prevIndex[2],
        prevIndex[2] === blog_entries.length - 1 ? 0 : prevIndex[2] + 1,
      ];
    });
  };

  const getCard = (i) => {
    return blog_entries[i];
  };

  return (
    <div className="blogEntries card">
      <div className="shiftButtonContainer">
        <IconButton
          children={<Back />}
          className="shiftButton leftShiftButton"
          color="primary"
          onClick={() => {
            delayAutoShift();
            shiftLeft();
          }}
        />
      </div>
      {blog_entries.map((entry, index) => {
        switch (index) {
          case cardsIndex[0]:
            return <SingleEntry key={index} data={entry} className="left" />;

          case cardsIndex[1]:
            return <SingleEntry key={index} data={entry} className="center" />;

          case cardsIndex[2]:
            return <SingleEntry key={index} data={entry} className="right" />;

          default:
            return <SingleEntry key={index} data={entry} className="hidden" />;
        }
      })}
      <div className="shiftButtonContainer">
        <IconButton
          children={<Forward />}
          className="shiftButton rightShiftButton"
          color="primary"
          onClick={() => {
            delayAutoShift();
            shiftRight();
          }}
        />
      </div>
    </div>
  );
};

export default BlogEntries;
