import React from "react";
import { TextField } from "@mui/material";

const PhoneNumber = () => {
  return (
    <form>
      <div>
        <p>شماره تماس</p>
        <TextField
          variant="outlined"
          className="fullW"
          placeholder="09121111111"
          sx={{ direction: "ltr" }}
        />
      </div>
    </form>
  );
};

export default PhoneNumber;
