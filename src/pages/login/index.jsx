import Grid from "@mui/material/Grid";
import React from "react";
import style from "./style.module.scss";
import loginIll from "../../assets/svg/loginIll.svg";
import { Box, Button, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main className={style.loginIllArea}>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6} className={style.loginFormArea}>
              <Paper padding={3}>
                <div>
                  <h3>ثبت نام </h3>
                  <form>
                    <div>
                      <p>نام و نام خانوادگی</p>
                      <TextField variant="outlined" />
                    </div>
                    <div>
                      <p>شماره تماس</p>
                      <TextField variant="outlined" />
                    </div>
                    <Link to="/">
                      <Button variant="contained">بعدی</Button>
                    </Link>
                  </form>
                </div>
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
