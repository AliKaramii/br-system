import React, { useEffect, useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFormStep } from "../../store/features/login-slice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import pathes from "../../router/pathes";
import style from "./style.module.scss";

const validationSchema = yup.object({
  digit1: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit2: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit3: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit4: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit5: yup.string().min(1, "*").max(1, "* ").required("*"),
});

function OtpEntry() {
  const dispatch = useDispatch();
  const navigating = useNavigate();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const confirmBtnRef = useRef();
  let [count, setCount] = useState({
    num: process.env.REACT_APP_LOGIN_OTP_TIMER,
  });

  const formik = useFormik({
    initialValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setFormStep(1));
      return navigating(pathes.HOMEPAGE);
    },
  });

  const myInterval = () =>
    setInterval(() => {
      setCount((prevState) => {
        if (prevState.num > 0) {
          console.log(prevState.num);
          return {
            num: prevState.num - 1,
          };
        }
        console.log("out of if");
        return 0;
      });
    }, 1000);

  const handleCodeResend = () => {
    console.log("code resended");
    setCount({
      num: 6,
    });
  };

  useEffect(() => {
    ref1.current.focus();
    myInterval();

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const handleRefDetect = (nextRef) => {
    nextRef.current.focus();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <p>ورود کد</p>
          <Box className={style.otpBox}>
            <TextField
              inputRef={ref5}
              id="digit1"
              name="digit1"
              type="number"
              value={formik.values.digit1}
              onChange={formik.handleChange}
              onInput={() => handleRefDetect(confirmBtnRef)}
              error={formik.touched.digit1 && Boolean(formik.errors.digit1)}
              helperText={formik.touched.digit1 && formik.errors.digit1}
            />
            <TextField
              inputRef={ref4}
              id="digit2"
              name="digit2"
              type="number"
              value={formik.values.digit2}
              onChange={formik.handleChange}
              onInput={() => handleRefDetect(ref5)}
              error={formik.touched.digit2 && Boolean(formik.errors.digit2)}
              helperText={formik.touched.digit2 && formik.errors.digit2}
            />
            <TextField
              inputRef={ref3}
              id="digit3"
              name="digit3"
              type="number"
              value={formik.values.digit3}
              onInput={() => handleRefDetect(ref4)}
              onChange={formik.handleChange}
              error={formik.touched.digit3 && Boolean(formik.errors.digit3)}
              helperText={formik.touched.digit3 && formik.errors.digit3}
            />
            <TextField
              inputRef={ref2}
              id="digit4"
              name="digit4"
              type="number"
              value={formik.values.digit4}
              onChange={formik.handleChange}
              onInput={() => handleRefDetect(ref3)}
              error={formik.touched.digit4 && Boolean(formik.errors.digit4)}
              helperText={formik.touched.digit4 && formik.errors.digit4}
            />
            <TextField
              inputRef={ref1}
              id="digit5"
              name="digit5"
              type="number"
              value={formik.values.digit5}
              onChange={formik.handleChange}
              onInput={() => handleRefDetect(ref2)}
              error={formik.touched.digit5 && Boolean(formik.errors.digit5)}
              helperText={formik.touched.digit5 && formik.errors.digit5}
            />
          </Box>
          <Box
            sx={{
              marginBottom: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>{count.num ? count.num : 0}</p>
            {count.num > 0 ? (
              <p>تا ارسال دوباره کد</p>
            ) : (
              <Button onClick={handleCodeResend}>ارسال دوباره کد</Button>
            )}
          </Box>
          <Button
            ref={confirmBtnRef}
            variant="contained"
            fullWidth
            type="submit"
          >
            تایید
          </Button>
          <Button
            onClick={() => dispatch(setFormStep(1))}
            className="fullW"
            sx={{ marginTop: "0.5rem" }}
          >
            ویرایش شماره
          </Button>
        </div>
      </form>
    </>
  );
}

export default OtpEntry;
