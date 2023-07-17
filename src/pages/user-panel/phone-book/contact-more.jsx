import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import { Link } from "react-router-dom";

const ContactMoreInfo = ({ data, align = "space-between", status = "" }) => {
  const { name, membershipDate, profission, tel } = data;
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
          flexWrap: "wrap",
          justifyContent: align,
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
          marginBottom: "1rem",
        }}
      >
        <Box>
          <Typography component="span" color="primary" marginRight={2}>
            نام:
          </Typography>
          <Typography component="span">{name}</Typography>
        </Box>
        <Box>
          <Typography component="span" color="primary" marginRight={2}>
            تاریخ عضویت:
          </Typography>
          <Typography component="span">{membershipDate}</Typography>
        </Box>
      </Box>
      <Box
        className="flexRowBetween"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: align,
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
          marginBottom: "1rem",
        }}
      >
        <Box>
          <Typography component="span" color="primary" marginRight={2}>
            حرفه:
          </Typography>
          <Typography component="span">{profission}</Typography>
        </Box>
        <Box>
          <Typography component="span" color="primary" marginRight={2}>
            شماره تماس:
          </Typography>
          <Typography component="span">{tel}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactMoreInfo;
