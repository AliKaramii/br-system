import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
const TicketDetails = ({ handleView }) => {
  const goToList = () => {
    handleView(false);
  };
  return (
    <>
      <Box className="flexRowBetween" marginBottom={2}>
        <Button onClick={goToList}>
          <ArrowForward /> بازگشت
        </Button>
        <Button variant="contained">پایان گفتگو</Button>
      </Box>
      <Divider />
      <Box className="flexRowBetween" marginY={2}>
        <Typography>موضوع رزرو استخر</Typography>
        <Typography>عنوان: مشکل در رزرو استخر</Typography>
        <Typography>13:30 1402/11/05</Typography>
      </Box>
      <Divider />
    </>
  );
};

export default TicketDetails;
