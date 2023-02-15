import React from "react";
import { TextField } from "@mui/material";

const OtpEntry = () => {
  return (
    <div>
      <h3>ثبت نام/ورود </h3>
      <form>
        <div>
          <p>ورود رمز</p>
          <TextField variant="outlined" />
          <p>ویرایش شماره</p>
        </div>
      </form>
    </div>
  );
};

export default OtpEntry;
