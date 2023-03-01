import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const ReservationFormFitrstStep = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        ثبت
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className={style.modal}>
          <Box id="modal-tittle" className={style.modalTitle}>
            <Typography variant="p" component="h3">
              ورود اطلاعات
            </Typography>
          </Box>

          <Grid
            id="modal-body"
            container
            spacing={2}
            className={style.modalBody}
          >
            فیلدهای فرم
            <br />
            تاریخ
            <br />
            ساعت
            <br />
            توضیح
            <br />
            محل ارائه
          </Grid>

          <Link to="/reservation">مرحله بعد</Link>
        </Box>
      </Modal>
    </>
  );
};
export default ReservationFormFitrstStep;
