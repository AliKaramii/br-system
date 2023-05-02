import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import { position } from "stylis";
import style from "./style.module.scss";
import pathes from "../../../../router/pathes";
import PersianDatePicker from "../../../base/dateTime/persianDatePicker";
import PersianTimePicker from "../../../base/dateTime/persianTimePicker";
// import { useTheme } from "@emotion/react";

const validationSchema = yup.object({
  date: yup
    .string()
    .min(1, "تاریخ  ")
    // .max(11, "تاریخ  ")
    .required("تاریخ را انتخاب کنید"),
});

const ReservationFormFirstStepLayout = () => {
  // const theme = useTheme();
  // theme.direction = "rtl";
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      place: "",
      desc: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
    },
  });

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        ثبت
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className={style.modal}>
          <Box id="modal-tittle" className={style.modalTitle}>
            <Typography variant="p" component="h3">
              ورود اطلاعات
            </Typography>
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <Grid
              id="modal-body"
              container
              spacing={2}
              className={style.modalBody}
            >
              {/* {console.log("theme >", theme.direction)} */}
              <Grid item xs={12} sm={6}>
                <div>
                  <TextField
                    variant="standard"
                    sx={{ marginBottom: 4 }}
                    fullWidth
                    className="dateTime-input"
                    id="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                    InputProps={{
                      endAdornment: (
                        <>
                          <PersianDatePicker />
                          <InputAdornment position="end">
                            <DateRangeIcon />
                          </InputAdornment>
                        </>
                      ),
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div>
                  <TextField
                    variant="standard"
                    sx={{ marginBottom: 4 }}
                    className="dateTime-input"
                    fullWidth
                    id="time"
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    error={formik.touched.time && Boolean(formik.errors.time)}
                    helperText={formik.touched.time && formik.errors.time}
                    InputProps={{
                      endAdornment: (
                        <>
                          <PersianTimePicker />
                          <InputAdornment position="end">
                            <AccessTimeIcon />
                          </InputAdornment>
                        </>
                      ),
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <FormControl
                        fullWidth
                        variant="standard"
                        sx={{ marginBottom: 4 }}
                        id="servingPlace"
                        name="servingPlace"
                        label="محل ارائه"
                        value={formik.values.servingPlace}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.servingPlace &&
                          Boolean(formik.errors.servingPlace)
                        }
                      >
                        <InputLabel id="demo-simple-select-label">
                          محل ارائه
                        </InputLabel>
                        <Select
                          // helperText={
                          //   formik.touched.servingPlace &&
                          //   formik.errors.servingPlace
                          // }
                          // InputProps={{
                          //   endAdornment: (
                          //     <InputAdornment position="end">
                          //       <LocationOnOutlinedIcon />
                          //     </InputAdornment>
                          //   ),
                          // }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value="10"
                          label="محل ارائه"
                        >
                          <MenuItem value={10}>محل کافی شاپ</MenuItem>
                          <MenuItem value={20}>واحد 201</MenuItem>
                          <MenuItem value={30}>لابی ساختمان</MenuItem>
                          <MenuItem value={30}>اتاق تشریفات </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    id="desc"
                    name="desc"
                    label="توضیحات"
                    placeholder="درصورت نیاز به توضیح"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    error={formik.touched.desc && Boolean(formik.errors.desc)}
                    helperText={formik.touched.desc && formik.errors.desc}
                  />
                </div>
              </Grid>
              <Box marginY={3} minWidth="100%" className="flexRowReverse">
                <Link to={pathes.RESERVATION}>
                  <Button variant="outlined" type="submit">
                    مرحله بعد
                  </Button>
                </Link>
              </Box>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default ReservationFormFirstStepLayout;
