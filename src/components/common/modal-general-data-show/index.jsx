import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import style from "./style.module.scss";

// !most com from outside
const defaultData = { title: "blank", subTitle: "blank", bodyText: "blank" };

const GeneralDataShowModal = ({ children }) => {
  const { title, subTitle, bodyText } = defaultData;

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
            <Typography variant="p" component="p">
              {subTitle}
            </Typography>
          </Box>
          <Box>{bodyText}</Box>
        </Box>
      </Modal>
    </>
  );
};
export default GeneralDataShowModal;
