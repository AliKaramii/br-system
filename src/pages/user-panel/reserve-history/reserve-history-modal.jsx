import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import CheckoutTable from "../../../components/common/checkout-table";

const ReserveHistoryModal = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary" variant="contained">
        اطلاعات بیشتر
      </Button>
      {console.log("#$", data)}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className={style.modal}>
          <Box id="modal-tittle" className={style.modalTitle}>
            <Typography variant="p" component="h3">
              {data.title}
            </Typography>
          </Box>
          <Box className={style.modalBody}>
            <CheckoutTable title="لیست رزرو" data={data} maxWidth={"lg"} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ReserveHistoryModal;
