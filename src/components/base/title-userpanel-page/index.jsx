import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";

const UserPanelPageTitle = ({ children, pageIcon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      display="flex"
      marginBottom={2}
    >
      <img src={pageIcon} alt="عنوان صفحه" />
      <Typography marginLeft={1} color={theme.palette.primary.main}>
        {children}
      </Typography>
    </Box>
  );
};

export default UserPanelPageTitle;
