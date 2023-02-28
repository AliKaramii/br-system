import { Box } from "@mui/system";
import React from "react";
import BtnCircle from "../../base/btn-circle";
import style from "./style.module.scss";

const AddToCartCounterBtn = () => {
  const count = 200;
  return (
    <>
      <Box className={style.addToCartCounter}>
        <BtnCircle text="+" />
        <span>{count}</span>
        <BtnCircle text="-" />
      </Box>
    </>
  );
};

export default AddToCartCounterBtn;
