import React from "react";
import { Link } from "react-router-dom";
import pathes from "../../../router/pathes";
import { Box, Button, Typography, Container, Divider } from "@mui/material";
import IconTitleBadge from "../../../components/base/badge-icon-title";

const PhonebookBox = () => {
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
          <Typography>دفترچه تلفن</Typography>
        </Box>
        <Link to={pathes.PHONEBOOK}>
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

export default PhonebookBox;
