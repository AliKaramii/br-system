import React, { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import FormStepper from "../../components/common/stepper";
import CheckoutTable from "../../components/common/checkout-table";
import { fetchData } from "../../services/http-client";
import pathes from "../../router/pathes";
import Loading from "../../components/base/loading";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const [data, setData] = useState();
  const reserveData = useSelector((state) => state.reservation); //* just to check entered data

  useEffect(() => {
    fetchData("/sampleCafeReceipt").then((fetchedData) => {
      console.log("Data from Redux:", reserveData);
      return setData(fetchedData);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <FormStepper activeStep={2} />
        {data ? (
          <CheckoutTable
            title="بررسی نهایی و تایید رزرو"
            data={data}
            to={pathes.RECEIPT}
            btnText="پرداخت با درگاه"
          />
        ) : (
          <Box sx={{ height: "50vh" }}>
            <Loading />
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;
