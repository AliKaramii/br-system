import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import CheckoutItemCard from "../../components/base/checkout-item-card";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FormStepper from "../../components/common/stepper";

const FormSecondStep = () => {
  return (
    <>
      <Header />
      <Container>
        <FormStepper activeStep={1} />
        <Grid container>
          <Grid item>
            <CheckoutItemCard />
          </Grid>
          <Grid item>
            <CheckoutItemCard />
          </Grid>
          <Grid item>
            <CheckoutItemCard />
          </Grid>
        </Grid>
      </Container>
      <Link to="/checkout">مرحله بعد</Link>
      <Footer />
    </>
  );
};

export default FormSecondStep;
