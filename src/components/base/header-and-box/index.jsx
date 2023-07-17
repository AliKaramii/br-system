import { Box } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";

const HeaderAndBox = ({ children, title = "" }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          textAlign: "center",
          color: theme.palette.text.light,
          padding: "16px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          padding: "24px",
          border: `1px solid ${theme.palette.border.dark1}`,
          borderRadius: "0 0 8px 8px",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default HeaderAndBox;
