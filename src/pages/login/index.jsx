import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import style from "./style.module.scss";
import loginIll from "../../assets/svg/loginIll.svg";
import { Box, Button, Paper, Typography } from "@mui/material";
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

  const handleFormStep = () => {
    setStep(1);
  };

  const renderNumberEditor = () => {
    if (step === 2) {
      return (
        <Button
          onClick={handleFormStep}
          className="fullW"
          sx={{ marginTop: "0.5rem" }}
        >
          ویرایش شماره
        </Button>
      );
    }
  };

  return (
    <main className={style.loginIllArea}>
      <Grid container>
        <Grid item xs={12} sm={6} className={style.loginFormArea}>
          <Typography variant="mainTitle2" component="h3" margin={4}>
            ثبت نام/ورود
          </Typography>
          <Paper padding={4} className={style.formBox}>
            {step === 1 ? <PhoneNumber /> : <OtpEntry />}
            <Box paddingX={6} marginY={2}>
              <Button
                variant="contained"
                onClick={handleSteps}
                className="fullW"
              >
                تایید
              </Button>

              {renderNumberEditor()}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} padding={2}>
          <div className={style.loginImage}>
            <img src={loginIll} alt="login" />
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Login;
