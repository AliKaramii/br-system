import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "post",
  initialState: {
    module: "",
    title: "",
    name: "",
    phoneNumber: "",
    date: "",
    time: "",
    place: "",
    description: "",
  },
  reducers: {
    setReserveData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setReserveData } = reservationSlice.actions;

export default reservationSlice.reducer;
