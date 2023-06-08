import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../assets/svg/cart-empty-ill.svg";
import {
  getCartTotal,
  remove,
} from "../../../store/features/shopping-cart-food-slice";
import AddToCartCounterBtn from "../add-to-cart-counter";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import style from "./style.module.scss";

const ShoppingCart = ({ children }) => {
  const { items, totalAmount, totalCount } = useSelector(
    (state) => state.foodShoppingCart
  );
  const { foodShoppingCart } = useSelector((state) => state);
  // console.log(foodShoppingCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  return (
    <Box className={style.cart}>
      {items.length ? (
        <>
          <Box className="underlined">کافی شاپ پینار</Box>
          {items.map((item, index) => {
            if (item.amount) {
              return (
                <Box
                  key={index}
                  sx={{ width: "100%", padding: "8px 16px" }}
                  className="underlined"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>{item.itemName}</p>
                    <p>{item.price} T </p>
                    <AddToCartCounterBtn id={item.id} />
                    <DeleteOutlineIcon
                      sx={{
                        color: "primary.main",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => dispatch(remove(item.id))}
                    />
                  </Box>
                </Box>
              );
            }
          })}
          <Box
            sx={{ width: "100%", padding: "8px 16px" }}
            className="underlined"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p>مبلغ کل</p>
              <p>{totalAmount} تومان </p>
            </Box>
            <p>تعداد کل: {totalCount}</p>
          </Box>
          {children}
        </>
      ) : (
        <>
          <img src={img} alt="سبد خرید" />
          <p>سبد خرید شما خالی است</p>
        </>
      )}
    </Box>
  );
};

export default ShoppingCart;
