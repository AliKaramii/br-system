import { Paper } from "@mui/material";
import React from "react";
import img from "../../../assets/svg/cafe-icon-drink.svg";
const CheckoutItemCard = () => {
  return (
    <Paper>
      <img src={img} alt="icon" />
      <p>کافی شاپ گلها </p>
    </Paper>
  );
};

export default CheckoutItemCard;
