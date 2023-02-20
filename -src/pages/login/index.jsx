import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import style from "./style.module.scss";
import loginIll from "../../assets/svg/loginIll.svg";
import { Box, Button, Paper } from "@mui/material";
import PhoneNumber from "./phone-number";
import { useNavigate } from "react-router-dom";
import OtpEntry from "./otp";

const Login = () => {
  const [step, setStep] = useState(1);

  const navigating = useNavigate();

  const handleSteps = () => {
    setStep(2);
    if (step === 2) {
      return navigating("/");
    }
  };

  return (
    <>
      <main className={style.loginIllArea}>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6} className={style.loginFormArea}>
              <h3>ثبت نام/ورود </h3>
              <Paper padding={3}>
                {step === 1 ? <PhoneNumber /> : <OtpEntry />}
                <Button variant="contained" onClick={handleSteps}>
                  تایید
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} padding={2}>
              <img src={loginIll} alt="login" />
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Login;
