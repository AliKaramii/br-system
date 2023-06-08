import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/shopping-cart-food-slice.js";
import loginSlice from "./features/login-slice.js";
import reservationSlice from "./features/reservation-slice.js";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

const rootReducers = combineReducers({
  foodShoppingCart: cartSlice,
  login: loginSlice,
  reservation: reservationSlice,
});

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({ reducer: rootReducers });

export default store;
