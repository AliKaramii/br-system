import { Box, Button, Typography, Container, Divider } from "@mui/material";
import React from "react";
import IconTitleBadge from "../../../components/base/badge-icon-title";
import pathes from "../../../router/pathes";
import { Link } from "react-router-dom";

const BillingBox = () => {
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
          <Typography>شارژو بدهی</Typography>
        </Box>
        <Link to={pathes.BILLINGS}>
          <Button>مشاهده بیشتر</Button>
        </Link>
      </Box>
      <Divider />
      <Box>
        <Box>
          <IconTitleBadge />
          BillingBox
        </Box>
      </Box>
    </Container>
  );
};

export default BillingBox;
