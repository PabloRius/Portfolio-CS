import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import { lightTheme } from "./themes/themes";

import DefaultLayout from "./layouts/default";

function App() {
  return (
    <div
      style={{ backgroundColor: "rgb(245, 255, 255)", width: "100%" }}
      className="App"
    >
      <ThemeProvider theme={lightTheme}>
        <DefaultLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
