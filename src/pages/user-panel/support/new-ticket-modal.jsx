import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import style from "./style.module.scss";

const AddNewMessageModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleOpen}>{children}</Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className={style.modal}>
          <Box id="modal-tittle" className={style.modalTitle}>
            <Typography variant="p" component="h3">
              ارسال پیام جدید
            </Typography>
          </Box>
          <Box className={style.modalBody}></Box>
          <Box className={style.buttonBox}>
            <Button color="success">تایید</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default AddNewMessageModal;
