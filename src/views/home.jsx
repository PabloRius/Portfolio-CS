import React from "react";

import IconButton from "@mui/material/IconButton";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import Header from "../components/header/header";
import TimeLine from "../components/timeline";

import variables from "../variables/variables";
import BlogEntries from "../components/blogs/blog_entries";

const Home = () => {
  return (
    <>
      <Header />
      <TimeLine />
      <BlogEntries />
    </>
  );
};

export default Home;
