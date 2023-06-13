import React, { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import CheckoutTable from "../../components/common/checkout-table";
import { Alert, Box } from "@mui/material";
import { fetchData } from "../../services/http-client";
import pathes from "../../router/pathes";
import Loading from "../../components/base/loading";

const ReceiptPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData("/sampleCafeReceipt").then((fetchedData) => {
      return setData(fetchedData);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        {data ? (
          <>
            <Container maxWidth="sm" sx={{ marginY: "24px" }}>
              <Alert severity="success">{data.message}</Alert>
            </Container>
            <CheckoutTable
              title="رسید رزرو "
              data={data}
              to={pathes.HOMEPAGE}
              btnText="بازگشت به صفحه اصلی"
            />
          </>
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

export default ReceiptPage;
