import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Container, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFormStep } from "../../store/features/login-slice";

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .min(1, "شماره همراه شامل 11 رقم است  ")
    // .max(11, "شماره همراه شامل 11 رقم است  ")
    .required("شماره خود را وارد کنید"),
});

const PhoneNumber = () => {
  const dispatch = useDispatch();
  const { formStep } = useSelector((state) => state.login);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setFormStep(2));
    },
  });

  const [number, setNumber] = useState("");

  const handleOnChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <p>شماره تماس</p>
        <TextField
          sx={{ marginBottom: 10 }}
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          placeholder="09121111111"
          type="number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />

        <Button variant="contained" fullWidth type="submit">
          تایید
        </Button>
      </div>
    </form>
  );
};

export default PhoneNumber;
