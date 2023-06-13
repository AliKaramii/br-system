import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "post",
  initialState: {
    // module: "",
    // title: "",
    // name: "",
    // phone: "",
    // unitId: "",
    //  date: "",
    // time: "",
    //  place: "",
    // description: "",
    // payment: "",
  },
  reducers: {
    setReserveData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearReserveData: (state, action) => {
      return (state = {});
    },
  },
});

export const { setReserveData, clearReserveData } = reservationSlice.actions;

export default reservationSlice.reducer;
