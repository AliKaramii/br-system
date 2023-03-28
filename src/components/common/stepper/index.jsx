import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// for rtl
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// function RTL(props) {
//   return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
// }
//

const steps = ["انتخاب کافی شاپ", "ورود اطلاعات ", " بررسی و پرداخت"];

function FormStepper({ activeStep }) {
  return (
    <CacheProvider value={cacheRtl}>
      <Box sx={{ width: "100%", direction: "ltr", paddingBottom: "6vh" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </CacheProvider>
  );
}

export default FormStepper;
