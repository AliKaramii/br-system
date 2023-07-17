import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import IconTitleBadge from "../../../components/base/badge-icon-title";
import { Link } from "react-router-dom";
import pathes from "../../../router/pathes";

const LatestReservesBox = () => {
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
        <Link to={pathes.RESERVEHISTORY}>
          <Button>مشاهده بیشتر</Button>
        </Link>
      </Box>
      <Divider />
      <Box>
        <Box>
          <IconTitleBadge />
        </Box>
      </Box>
    </Container>
  );
};

export default LatestReservesBox;
