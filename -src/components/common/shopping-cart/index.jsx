import img from "../../../assets/svg/cart-empty-ill.svg";
import style from "./style.module.scss";

import React from "react";
import { Box } from "@mui/system";

const Cart = () => {
  return (
    <Box className={style.cart}>
      <img src={img} alt="سبد خرید" />
      <p>سبد خرید شما خالی است</p>
    </Box>
  );
};

export default Cart;
