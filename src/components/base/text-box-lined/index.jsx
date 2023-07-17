import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import RatingWithCount from "../Rating-with-count/rating-with-count";

const TextBoxLined = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "2px solid transparent",

        ":hover": {
          cursor: "pointer",
          borderBottom: "2px solid #c82090",
          bgcolor: "#e5e5e5",
        },
      }}
    >
      <Typography
        padding={1}
        margin={1}
        sx={{
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
        }}
      >
        <Typography marginRight={2} component="span" color="primary">
          نام :
        </Typography>
        حسن حسینی
      </Typography>
      <Typography
        sx={{
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
        }}
        padding={1}
        margin={1}
      >
        <Typography marginRight={2} component="span" color="primary">
          حرفه :
        </Typography>
        برق کار
      </Typography>
      <RatingWithCount users={11} rate={4} />
    </Paper>
  );
};

export default TextBoxLined;
