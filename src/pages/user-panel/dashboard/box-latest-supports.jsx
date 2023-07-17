import { Box, Button, Typography, Container, Divider } from "@mui/material";
import React from "react";
import IconTitleBadge from "../../../components/base/badge-icon-title";
import { Link } from "react-router-dom";
import pathes from "../../../router/pathes";

const LatestSupportsBox = () => {
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
          <Typography>پشتیبانی های واحد 8</Typography>
        </Box>
        <Link to={pathes.SUPPORT}>
          <Button>مشاهده بیشتر</Button>
        </Link>
      </Box>
      <Divider />
      <Box>
        <Box>
          LatestSupportsBox
          <IconTitleBadge />
        </Box>
      </Box>
    </Container>
  );
};
export default LatestSupportsBox;
