import React from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import AddNewMessageModal from "./new-ticket-modal";

const TicketList = ({ handleView }) => {
  const openDetail = () => {
    handleView(true);
  };
  return (
    <>
      <Box className="flexRowEnd" marginBottom={2}>
        <AddNewMessageModal>
          <Button variant="contained">افزودن پیام جدید</Button>
        </AddNewMessageModal>
      </Box>
      <Divider />
      <Typography marginY={2} textAlign="center">
        لیست جدول تیکت ها
      </Typography>
      <Box>
        <Container>
          <Button onClick={openDetail}>نمایش جزئیات</Button>
        </Container>
      </Box>
    </>
  );
};

export default TicketList;
