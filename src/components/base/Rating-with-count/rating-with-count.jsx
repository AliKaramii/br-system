import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const RatingWithCount = ({
  users = null,
  rate = null,
  size = "small",
  aling = "flex-end",
}) => {
  return (
    <Box display="flex" alignItems={aling} justifyContent={aling} paddingY={1}>
      <Typography marginRight={2} component="span" color="primary">
        امتیاز:
      </Typography>
      <Rating size={size} defaultValue={rate} dir="ltr" />
      <p>{`(${users}) نفر`}</p>
    </Box>
  );
};

export default RatingWithCount;
