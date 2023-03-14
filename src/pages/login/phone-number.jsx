import React, { useState } from "react";
import { TextField } from "@mui/material";

const PhoneNumber = () => {
  const [number, setNumber] = useState("");

  const handleOnChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form>
      <div>
        <p>شماره تماس</p>
        <TextField
          type="number"
          pattern="[0-9]*"
          value={number}
          onChange={(e) => handleOnChange(e)}
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
