import { Box } from "@mui/system";
import React from "react";
import img from "../../../assets/svg/cart-empty-ill.svg";
import ReservationFormFirstStepLayout from "../../layout/reservation-form-first-step";
import style from "./style.module.scss";

const ShoppingCart = () => {
  return (
    <Box className={style.cart}>
      <img src={img} alt="سبد خرید" />
      <p>سبد خرید شما خالی است</p>
      <ReservationFormFirstStepLayout />
    </Box>
  );
};

export default ShoppingCart;
