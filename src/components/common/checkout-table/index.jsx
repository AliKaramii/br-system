import React from "react";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import CheckoutTableFeild from "../../base/checkout-table-feild";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const CheckoutTable = () => {
  return (
    <Container maxWidth="sm">
      <Box className={style.tableHeader}>
        <Typography component="h3" variant="p">
          بررسی نهایی رزرو کافی شاپ پینار
        </Typography>
      </Box>
      <Box className={style.tableBody}>
        <CheckoutTableFeild text={"تاریخ: 1402/03/05"} />
        <CheckoutTableFeild text={"ساعت: 15:30"} />
        <CheckoutTableFeild text={"مبلغ: 320.000"} />
        <Box className="flexRowReverse">
          <Link to="#">
            <Button variant="contained">پرداخت با درگاه</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default CheckoutTable;
