import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import userIcon from "../../../assets/svg/reservation-icon-user.svg";
import paymentIcon from "../../../assets/svg/reservation-icon-payment.svg";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  user: yup
    .string()
    .min(1, "user  ")
    // .max(11, "user  ")
    .required("user "),
});

export default function FormAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const formik = useFormik({
    initialValues: {
      user: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={userIcon} alt="icon" />
              <Typography sx={{ marginX: 1 }}>اطلاعات کاربر</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  sx={{ marginBottom: 4 }}
                  fullWidth
                  id="user"
                  name="user"
                  label="نام کاربر"
                  value={formik.values.user}
                  onChange={formik.handleChange}
                  error={formik.touched.user && Boolean(formik.errors.user)}
                  helperText={formik.touched.user && formik.errors.user}
                />
                <TextField
                  variant="standard"
                  sx={{ marginBottom: 4 }}
                  fullWidth
                  id="phone"
                  name="phone"
                  label="شماره تماس"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  sx={{ marginBottom: 4 }}
                  fullWidth
                  id="unitId"
                  name="unitId"
                  label="شماره واحد"
                  value={formik.values.unitId}
                  onChange={formik.handleChange}
                  error={formik.touched.unitId && Boolean(formik.errors.unitId)}
                  helperText={formik.touched.unitId && formik.errors.unitId}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={paymentIcon} alt="icon" />
              <Typography sx={{ marginX: 1 }}>نوع پرداخت</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="پرداخت در محل"
                  control={<Radio />}
                  label="پرداخت در محل"
                />
                <FormControlLabel
                  value="پرداخت از کیف پول"
                  control={<Radio />}
                  label="پرداخت از کیف پول"
                />
                <FormControlLabel
                  disabled
                  value="پرداخت اینترنتی"
                  control={<Radio />}
                  label="پرداخت اینترنتی"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </form>
    </Box>
  );
}
