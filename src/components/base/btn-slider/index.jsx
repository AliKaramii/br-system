import React from "react";

import { Box, Button } from "@mui/material";
import { theme } from "../../../assets/themes/theme.js";

const handleExploreByMonth = () => {
  console.log("month");
};

const SliderBtn = () => {
  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        borderRadius: "8px",
        color: theme.palette.text.light,
      }}
    >
      <Button variant="contained" onClick={handleExploreByMonth}>
        {`<`}
      </Button>
      <span> آذرماه </span>
      <Button variant="contained" onClick={handleExploreByMonth}>
        {`>`}
      </Button>
    </Box>
  );
};

export default SliderBtn;
