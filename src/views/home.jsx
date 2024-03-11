import React from "react";

import Header from "../components/header/Header";
import TimeLine from "../components/timeline/Timeline";

import BlogEntries from "../components/blogs/BlogEntries";

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
