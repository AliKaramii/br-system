import { Paper, Typography } from "@mui/material";
import React from "react";

const CheckoutItemCard = ({ icon, text }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "8px",
        borderRadius: "8px",
        boxShadow: "2px 2px 8px #B7B7B7",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <img src={icon} alt="icon" />
      <Typography variant="p" marginX={2}>
        {text}
      </Typography>
    </Paper>
  );
};

export default CheckoutItemCard;
