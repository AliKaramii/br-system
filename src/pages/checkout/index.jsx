import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import FormStepper from "../../components/common/stepper";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Container>
        <FormStepper activeStep={2} />
        <h1>Checkout</h1>
      </Container>
      <Link to="#">ورود به درگاه و پرداخت</Link>
      <Footer />
    </>
  );
};

export default CheckoutPage;
