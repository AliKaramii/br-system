import React from "react";
import { Box, Paper, Rating, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme";

const TextBoxLined = () => {
  return (
    <Paper sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        padding={1}
        margin={1}
        sx={{
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
        }}
      >
        نام :
        <Typography marginX={2} component="span" color="primary">
          حسن حسینی
        </Typography>
      </Typography>
      <Typography
        sx={{
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
        }}
        padding={1}
        margin={1}
      >
        حرفه :
        <Typography marginX={2} component="span" color="primary">
          برق کار
        </Typography>
      </Typography>
      <Box display="flex" padding={1} margin={1}>
        <Typography marginX={2} component="span" color="primary">
          امتیاز
        </Typography>
        <Rating size="small" defaultValue={4} dir="ltr" />
        <p>{`(${12}) نفر`}</p>
      </Box>
    </Paper>
  );
};

export default TextBoxLined;
