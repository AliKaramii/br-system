import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import style from "./style.module.scss";

const OtpEntry = () => {
  let [time, setTime] = useState(2);
  const [allowToResend, setAllowToResend] = useState(false);

  const timerFunction = () => {
    setTime(2);
    setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => (time = prevTime - 1));
        console.log("interval");
      } else {
        setAllowToResend(true);
      }
    }, 1000);
  };

  useEffect(() => {
    timerFunction();

    return () => {
      clearInterval(timerFunction);
    };
  }, []);

  const handleCodeResend = () => {
    timerFunction();
    console.log("code resended");
  };

  return (
    <form>
      <div>
        <p>ورود رمز</p>
        <Box className={style.otpBox}>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{time}</p>
          {!allowToResend ? (
            <p>تا ارسال دوباره کد</p>
          ) : (
            <Button onClick={handleCodeResend}>ارسال دوباره کد</Button>
          )}
        </Box>
      </div>
    </form>
  );
};

export default OtpEntry;
