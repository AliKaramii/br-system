import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "post",
  initialState: {
    formStep: 1,
  },
  reducers: {
    setFormStep: (state, action) => void (state.formStep = action.payload),
  },
});

export const { setFormStep } = loginSlice.actions;

export default loginSlice.reducer;
