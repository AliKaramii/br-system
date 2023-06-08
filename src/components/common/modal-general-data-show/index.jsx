import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import style from "./style.module.scss";

const GeneralDataShowModal = ({ children, data }) => {
  const { title, subTitle, body } = data;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <a onClick={handleOpen}>{children}</a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className={style.modal}>
          <Box id="modal-tittle" className={style.modalTitle}>
            <Typography variant="p" component="h3">
              {title}
            </Typography>
          </Box>
          <Box className={style.modalBody}>{body}</Box>
        </Box>
      </Modal>
    </>
  );
};
export default GeneralDataShowModal;
