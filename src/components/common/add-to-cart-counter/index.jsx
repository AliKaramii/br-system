import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
// import BtnCircle from "../../base/btn-circle";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
} from "../../../store/features/shopping-cart-food-slice.js";
import style from "./style.module.scss";

const sx = {
  border: "none",
  borderRadius: "16px",
  width: "32px",
  height: "32px",
  color: "text.light",
  minWidth: "0",
  padding: "1px 0 0 0",
  backgroundColor: "primary.main",
  "&:hover": { backgroundColor: "secondary.main" },
};

const AddToCartCounterBtn = ({ id }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.foodShoppingCart);

  let testCount = 0;
  items.map((item) => {
    if (item.id === id) return (testCount = item.amoumt);
    else return 0;
  });

  return testCount === 0 ? (
    <>
      <Button sx={sx} onClick={() => dispatch(increase(id))}>
        +
      </Button>
    </>
  ) : (
    <>
      <Box className={style.addToCartCounter}>
        <Button sx={sx} onClick={() => dispatch(increase(id))}>
          +
        </Button>
        {items.map((item, index) => {
          if (item.amount && item.id === id) {
            return <span key={index}>{item.amount}</span>;
          } else return null;
        })}
        <Button
          sx={sx}
          // onClick={handleDecreaseCounter}
          onClick={() => dispatch(decrease(id))}
        >
          -
        </Button>
      </Box>
    </>
  );
};

export default AddToCartCounterBtn;
