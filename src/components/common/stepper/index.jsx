import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["انتخاب کافی شاپ", "ورود اطلاعات رزرو", " بررسی نهایی"];

function FormStepper({ activeStep }) {
  return (
    <Box sx={{ width: "100%", direction: "ltr", paddingBottom: "6vh" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default FormStepper;
