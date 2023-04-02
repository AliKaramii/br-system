import React from "react";
import { Paper } from "@mui/material";

const CheckoutTableFeild = ({ text }) => {
  return (
    <Paper
      sx={{
        margin: 2,
        padding: 1,
        boxShadow: "2px 2px 8px #B7B7B7 ",
        borderBottom: "1px solid #6A14D1",
      }}
    >
      <p>{text}</p>
    </Paper>
  );
};

export default CheckoutTableFeild;
