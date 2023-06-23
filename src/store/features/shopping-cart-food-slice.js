import { createSlice } from "@reduxjs/toolkit";
import { cafeMenuMock } from "../../services/mock-data/cafe.js";

const cartSlice = createSlice({
  name: "post",
  initialState: {
    items: cafeMenuMock,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase: (state, action) => {
      console.log(action.payload);
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload && item.amount > 0) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    getCartItems: (state) => {
      state.items = cafeMenuMock;
    },
    setCartSource: (state, action) => {
      //* get selected module menu and set it to "items" here (to have a soutce for comparison and add menu item to cart)
      state.items = action.payload;
      console.log("state.items", state.action);
    },
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  getCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
