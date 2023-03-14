import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/shopping-cart-food-slice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const reducer = combineReducers({
//   foodShoppingCart: CartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: { foodShoppingCart: CartReducer },
});

export default store;
