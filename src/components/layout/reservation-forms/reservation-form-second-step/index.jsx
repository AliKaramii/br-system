import React from "react";
import { Container } from "@mui/system";
import CheckoutItemCard from "../../../common/checkout-card";
import { Link } from "react-router-dom";
import FormStepper from "../../../common/stepper";
import FormAccordion from "../../../common/form-accordion";
import GeneralDataShowModal from "../../../common/modal-general-data-show";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import style from "./style.module.scss";

const FormSecondStepLayout = ({ icons }) => {
  return (
    <>
      <Container>
        <FormStepper activeStep={1} />
        <Box marginY={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <CheckoutItemCard text={"کافی شاپ پینار"} icon={icons.iconCafe} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckoutItemCard
                text={"تاریخ رزرو : 1402/11/06"}
                icon={icons.iconClock}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckoutItemCard text={"17:30"} icon={icons.iconCalendar} />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={2}>
          <Box className={style.formHeader}>
            <Typography component="h3" variant="p">
              رزرو کافی شاپ پینار
            </Typography>
          </Box>
          <Box className={style.formBody}>
            <FormAccordion />
            <Box marginY={2}>
              <FormControlLabel
                sx={{ margin: "0" }}
                control={<Checkbox />}
                // disabled
              ></FormControlLabel>
              <GeneralDataShowModal>قوانین را مطالعه کردم</GeneralDataShowModal>
            </Box>
            <Box className="flexRowReverse">
              <Link to="/checkout">
                <Button variant="outlined">مرحله بعد</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FormSecondStepLayout;
