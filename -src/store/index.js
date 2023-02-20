import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer.js";
const allReducers = combineReducers({
  cartReducer,
});

const store = configureStore({ reducer: allReducers });
export default store;
