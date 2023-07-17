import { Box, Button, Typography, Container, Divider } from "@mui/material";
import React from "react";
import IconTitleBadge from "../../../components/base/badge-icon-title";

const PaymentBox = () => {
  return (
    <Container
      sx={{
        border: "1px solid lightgray",
        borderRadius: "0.5rem",
        height: "304px",
        padding: "1rem",
      }}
    >
      <Box className="flexRowBetween">
        <Box className="flexRowBetween">
          <img src="" />
          <Typography>رزروهای اخیر</Typography>
        </Box>
        <Button>مشاهده بیشتر</Button>
      </Box>
      <Divider />
      <Box>
        <Box>
          <IconTitleBadge />
          PaymentBox
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentBox;
