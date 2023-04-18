import Grid from "@mui/material/Grid";
// import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import loginIll from "../../assets/svg/loginIll.svg";
import { Paper, Typography } from "@mui/material";
import PhoneNumber from "./phone-number";
// import { useNavigate } from "react-router-dom";
import OtpEntry from "./otp";
import { useSelector } from "react-redux";

const Login = () => {
  const { formStep } = useSelector((state) => state.login);

  const renderForm = () => {
    console.log("formStep renderform:", formStep);
    return formStep === 1 ? <PhoneNumber /> : <OtpEntry />;
  };
  // useEffect(() => {
  //   renderForm();
  // }, []);

  return (
    <main className={style.loginIllArea}>
      <Grid container>
        <Grid item xs={12} sm={6} className={style.loginFormArea}>
          <Typography variant="mainTitle2" component="h3" margin={4}>
            ثبت نام / ورود
          </Typography>
          <Paper padding={4} className={style.formBox}>
            {renderForm()}
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
