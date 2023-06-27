import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import { Link } from "react-router-dom";

const NotifMessageItem = ({ data }) => {
  const { title, date, body } = data;
  return (
    <Container
      sx={{
        border: `1px solid ${theme.palette.border.dark1}`,
        padding: 2,
        borderRadius: "0.5rem",
        marginY: "1rem",
      }}
    >
      <Link to="#" className="normal-link">
        <Box
          className="flexRowBetween"
          sx={{
            borderBottom: `1px solid ${theme.palette.border.dark1}`,
            marginBottom: "1rem",
          }}
        >
          <Typography color="primary">{title}</Typography>
          <Typography color="primary">{date}</Typography>
        </Box>
        <Typography>{body}</Typography>
      </Link>
    </Container>
  );
};

export default NotifMessageItem;
