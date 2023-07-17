import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import { Link } from "react-router-dom";

const NotifMessageItem = ({ data, align = "space-between", status = "" }) => {
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
      <Box
        className="flexRowBetween"
        sx={{
          display: "flex",
          justifyContent: align,
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
          marginBottom: "1rem",
        }}
      >
        <Typography color="primary">{title}</Typography>
        {date && <Typography color="primary">{date}</Typography>}
      </Box>
      <Typography sx={{ textAlign: align, color: `${status}.main` }}>
        {body}
      </Typography>
    </Container>
  );
};

export default NotifMessageItem;
