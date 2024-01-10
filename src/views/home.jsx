import React from "react";

import variables from "../variables/variables";
import TimeLine from "../components/timeline";

const Home = () => {
  return (
    <div style={{ minHeight: variables.minHomeHeight }}>
      <TimeLine />
    </div>
  );
};

export default Home;
