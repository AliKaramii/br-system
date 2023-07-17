import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme.js";

const IconTitleBadge = ({ text, icon }) => {
  return (
    <Box
      marginX={1}
      marginBottom={1}
      sx={{
        fontSize: "14px",
        display: "flex",
        justifyItems: "center",
        flexDirection: "row",
        bgcolor: theme.palette.back.light8,
        borderRadius: "0.5rem",
        padding: "0.5rem",
        width: "150px",
      }}
    >
      <img src={icon} alt="icon" />
      <Typography marginX={1} component="span" variant="smallBody">
        {text}
      </Typography>
    </Box>
  );
};

export default IconTitleBadge;
