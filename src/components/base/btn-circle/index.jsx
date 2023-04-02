import { Button } from "@mui/material";
import React from "react";

const BtnCircle = ({ text }) => {
  return (
    <Button
      sx={{
        minWidth: "0",
        border: "none",
        borderRadius: "16px",
        width: "32px",
        height: "32px",
        backgroundColor: "primary.main",
        color: "text.light",
        padding: "1px 0 0 0 ",
        " &:hover": {
          backgroundColor: "secondary.main",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default BtnCircle;
