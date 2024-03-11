import React, { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="header">
      <HeaderLeft className="headerLeft" />
      <HeaderRight className="headerRight" />
      {/* <LateralDrawer opened={opened} /> */}
    </div>
  );
};

export default Header;
