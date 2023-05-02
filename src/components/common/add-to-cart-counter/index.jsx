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
  // console.log("id from adBTN:", id);
  const dispatch = useDispatch();

  // const { totalAmount } = useSelector((state) => state.foodShoppingCart);
  const { items } = useSelector((state) => state.foodShoppingCart);
  // const itemTest = items.map((item) => item.id === id);
  // const myId = itemTest.amount;
  // console.log("totalAmount:", totalAmount);

  // items.map((item) => {
  //   // console.log("@item>", item.amount);
  //   return item.amount === 0 ? (
  //     <Button sx={sx} onClick={() => dispatch(increase(id))}>
  //       +
  //     </Button>
  //   ) : (
  //     <Box className={style.addToCartCounter}>
  //       <Button
  //         sx={sx}
  //         onClick={() => dispatch(increase(id))}
  //         className="addToCartBtn"
  //       >
  //         +
  //       </Button>
  //       <span>{item.amount}</span>
  //       <Button
  //         className="addToCartBtn"
  //         sx={sx}
  //         // onClick={handleDecreaseCounter}
  //         onClick={() => dispatch(decrease(id))}
  //       >
  //         -
  //       </Button>
  //     </Box>
  //   );
  // });
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

  //   items.map((item) => {
  //     return item.amount === 0 ? (
  //       <Button sx={sx} onClick={() => dispatch(increase(id))}>
  //         +
  //       </Button>
  //     ) : (
  //       <>
  //         <Box className={style.addToCartCounter}>
  //           <Button
  //             sx={sx}
  //             onClick={() => dispatch(increase(id))}
  //             className="addToCartBtn"
  //           >
  //             +
  //           </Button>
  //           {items.map((item) => {
  //             if (item.amount && item.id === id) {
  //               return <span>{item.amount}</span>;
  //             } else return null;
  //           })}
  //           <Button
  //             className="addToCartBtn"
  //             sx={sx}
  //             // onClick={handleDecreaseCounter}
  //             onClick={() => dispatch(decrease(id))}
  //           >
  //             -
  //           </Button>
  //         </Box>
  //       </>
  //     );
  //   });
  // };
};

export default AddToCartCounterBtn;
