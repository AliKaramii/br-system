import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import style from "./style.module.scss";
import loginIll from "../../assets/svg/loginIll.svg";
import { Box, Button, Paper } from "@mui/material";
import PhoneNumber from "./phone-number";
import { Link } from "react-router-dom";
import OtpEntry from "./otp";

const Login = () => {
  const [step, setStep] = useState(1);
  const setStepTo = () => {
    setStep(step + 1);
  };
  return (
    <>
      <main className={style.loginIllArea}>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6} className={style.loginFormArea}>
              <Paper padding={3}>
                {step === 1 ? <PhoneNumber /> : <OtpEntry />}
                <Button variant="contained" onClick={setStepTo}>
                  بعدی
                </Button>
                <Link to="/">Home</Link>
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
