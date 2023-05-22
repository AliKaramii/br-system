import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import { position } from "stylis";
import style from "./style.module.scss";
import pathes from "../../../../router/pathes";
import CustomDatePicker from "../../../base/custom-date-Time/date-picker";
import CustomTimePicker from "../../../base/custom-date-Time/time-picker";

// import { useTheme } from "@emotion/react";

const validationSchema = yup.object({
  date: yup.string().required("*"),
  time: yup.string().required("*"),
  desc: yup.string().max(200, "حداکثر طول توضیحات را رعایت کنید"),
});

const ReservationFormFirstStepLayout = () => {
  // const theme = useTheme();
  // theme.direction = "rtl";
  const navigating = useNavigate();
  const [open, setOpen] = useState(false);
  const [goToNextStep, setGoToNextStep] = useState(false);
  const [chosenDate, setChosenDate] = useState();
  const [chosenTime, setChosenTime] = useState();
  const [chosenPlace, setChosenPlace] = useState(10);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePlace = (e) => {
    setChosenPlace(e.target.value);
    console.log("e.t.v>", e.target.value);
  };
  const handleFillValues = () => {
    formik.values.date = chosenDate;
    formik.values.time = chosenTime;
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
      values.date = chosenDate;
      values.time = chosenTime;
      values.place = chosenPlace;
      console.log("values:", values);
      console.log("form submit");
      setGoToNextStep(true);
    },
  });

  useEffect(() => {
    if (goToNextStep) {
      return navigating(pathes.RESERVATION);
    }
  }, [goToNextStep]);

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
                    sx={{ marginBottom: 4, color: "#ffff" }}
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
                          <CustomDatePicker setChosenDate={setChosenDate} />
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
                          <CustomTimePicker setChosenTime={setChosenTime} />
                          {/* <PersianTimePicker /> */}
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
                        value={formik.values.place}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.place && Boolean(formik.errors.place)
                        }
                      >
                        <InputLabel id="demo-simple-select-label">
                          محل ارائه
                        </InputLabel>
                        <Select
                          // helperText={
                          //   formik.touched.place &&
                          //   formik.errors.place
                          // }
                          // InputProps={{
                          //   endAdornment: (
                          //     <InputAdornment position="end">
                          //       <LocationOnOutlinedIcon />
                          //     </InputAdornment>
                          //   ),
                          // }}

                          onChange={(e) => handlePlace(e)}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={chosenPlace}
                          label="محل ارائه"
                          displayEmpty
                        >
                          <MenuItem value={10}>محل کافی شاپ</MenuItem>
                          <MenuItem value={20}>واحد 201</MenuItem>
                          <MenuItem value={30}>لابی ساختمان</MenuItem>
                          <MenuItem value={40}>اتاق تشریفات </MenuItem>
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
                <Button
                  variant="outlined"
                  type="submit"
                  onClick={handleFillValues}
                >
                  مرحله بعد
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default ReservationFormFirstStepLayout;
