import React from "react";
import { TextField } from "@mui/material";

const PhoneNumber = () => {
  return (
    <div>
      <form>
        <div>
          <p>شماره تماس</p>
          <TextField variant="outlined" />
        </div>
      </form>
    </div>
  );
};

export default PhoneNumber;
