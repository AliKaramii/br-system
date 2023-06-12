import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import { position } from "stylis";
import pathes from "../../router/pathes";
import CustomDatePicker from "../../components/base/custom-date-Time/date-picker";
import CustomTimePicker from "../../components/base/custom-date-Time/time-picker";
import { useSelector, useDispatch } from "react-redux";
import { setReserveData } from "../../store/features/reservation-slice.js";
import { theme } from "../../assets/themes/theme";

// import { useTheme } from "@emotion/react";

const validationSchema = yup.object({
  date: yup.string().required("*"),
  startTime: yup.string().required("*"),
  finishTime: yup.string().required("*"),
  desc: yup.string().max(2, "حداکثر طول توضیحات را رعایت کنید"),
});

const VenuePrivateReserveForm = ({ title }) => {
  // const theme = useTheme();
  // theme.direction = "rtl";
  const navigating = useNavigate();

  const [goToNextStep, setGoToNextStep] = useState(false);
  const [chosenDate, setChosenDate] = useState();
  const [chosenStartTime, setChosenStartTime] = useState();
  const [chosenFinishTime, setChosenFinishTime] = useState();
  // const [chosenTime, setChosenTime] = useState();

  // ! Just to test - remove later
  const myData = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const handleFillValues = () => {
    formik.values.date = chosenDate;
    formik.values.startTime = chosenStartTime;
    formik.values.finishTime = chosenFinishTime;
  };
  const formik = useFormik({
    initialValues: {
      date: "",
      startTime: "",
      finishTime: "",
      desc: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
      dispatch(
        setReserveData({
          module: "venue",
          title: title,
          date: chosenDate,
          StartTime: chosenStartTime,
          finishTime: chosenFinishTime,
          description: formik.values.desc,
          // title: "اتاق فکر شیشه ای",
        })
      );
      console.log("myData:", myData);
      console.log("form submit");

      setGoToNextStep(true);
    },
  });

  useEffect(() => {
    if (goToNextStep) {
      return navigating(pathes.CAFERESERVATIONDATA);
    }
  }, [goToNextStep]);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: theme.palette.reserveMenu.tables,
          paddingX: 8,
          marginY: 4,
          borderRadius: 2,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid id="modal-body" container spacing={2}>
            {/* {console.log("theme >", theme.direction)} */}
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12} sm={6}>
              <div>
                <TextField
                  variant="standard"
                  sx={{ marginBottom: 4 }}
                  className="dateTime-input"
                  fullWidth
                  id="startTime"
                  name="startTime"
                  value={formik.values.startTime}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.startTime && Boolean(formik.errors.startTime)
                  }
                  helperText={
                    formik.touched.startTime && formik.errors.startTime
                  }
                  InputProps={{
                    endAdornment: (
                      <>
                        <CustomTimePicker
                          setChosenTime={setChosenFinishTime}
                          title="ساعت شروع"
                        />
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

            <Grid item xs={12} sm={6}>
              <div>
                <TextField
                  variant="standard"
                  sx={{ marginBottom: 4 }}
                  className="dateTime-input"
                  fullWidth
                  id="finishTime"
                  name="finishTime"
                  value={formik.values.finishTime}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.finishTime &&
                    Boolean(formik.errors.finishTime)
                  }
                  helperText={
                    formik.touched.finishTime && formik.errors.finishTime
                  }
                  InputProps={{
                    endAdornment: (
                      <>
                        <CustomTimePicker
                          setChosenTime={setChosenStartTime}
                          title="ساعت پایان"
                        />
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
                variant="contained"
                type="submit"
                onClick={handleFillValues}
              >
                رزرو
              </Button>
            </Box>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
export default VenuePrivateReserveForm;
