import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import FormStepper from "../../components/common/stepper";
import CheckoutTable from "../../components/common/checkout-table";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Container>
        <FormStepper activeStep={2} />
        <CheckoutTable />
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;
