import { Button } from "@mui/material";
import React from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1LIwe9hgLDrzXwpfGXLPOL5sDmlmuKWiZ"
    );
  };
  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      className="cvdButton"
      onClick={() => {
        handleDownload();
      }}
    >
      Download my CV
    </Button>
  );
};

export default DownloadCV;
