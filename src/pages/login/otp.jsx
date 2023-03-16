import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { setFormStep } from "../../store/features/login-slice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  digit1: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit2: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit3: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit4: yup.string().min(1, "*").max(1, "* ").required("*"),
  digit5: yup.string().min(1, "*").max(1, "* ").required("*"),
});

const OtpEntry = () => {
  const navigating = useNavigate();
  const dispatch = useDispatch();
  let [time, setTime] = useState(2);
  const [allowToResend, setAllowToResend] = useState(false);

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
      return navigating("/");
    },
  });

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <p>ورود کد</p>
        <Box className={style.otpBox}>
          <TextField
            id="digit1"
            name="digit1"
            type="number"
            value={formik.values.digit1}
            onChange={formik.handleChange}
            error={formik.touched.digit1 && Boolean(formik.errors.digit1)}
            helperText={formik.touched.digit1 && formik.errors.digit1}
          />
          <TextField
            id="digit2"
            name="digit2"
            type="number"
            value={formik.values.digit2}
            onChange={formik.handleChange}
            error={formik.touched.digit2 && Boolean(formik.errors.digit2)}
            helperText={formik.touched.digit2 && formik.errors.digit2}
          />
          <TextField
            id="digit3"
            name="digit3"
            type="number"
            value={formik.values.digit3}
            onChange={formik.handleChange}
            error={formik.touched.digit3 && Boolean(formik.errors.digit3)}
            helperText={formik.touched.digit3 && formik.errors.digit3}
          />
          <TextField
            id="digit4"
            name="digit4"
            type="number"
            value={formik.values.digit4}
            onChange={formik.handleChange}
            error={formik.touched.digit4 && Boolean(formik.errors.digit4)}
            helperText={formik.touched.digit4 && formik.errors.digit4}
          />
          <TextField
            id="digit5"
            name="digit5"
            type="number"
            value={formik.values.digit5}
            onChange={formik.handleChange}
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
          <p>{time}</p>
          {!allowToResend ? (
            <p>تا ارسال دوباره کد</p>
          ) : (
            <Button onClick={handleCodeResend}>ارسال دوباره کد</Button>
          )}
        </Box>
        <Button variant="contained" fullWidth type="submit">
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
  );
};

export default OtpEntry;
