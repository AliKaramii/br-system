import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import ShoppingCart from ".";

const ShoppingCartModal = () => {
  const [open, setOpen] = useState(false);
  const [showCartBtn, setShowCartBtn] = useState(true);
  const { totalCount } = useSelector((state) => state.foodShoppingCart);

  const handleOpen = () => {
    setOpen(true);
    setShowCartBtn(false);
  };
  const handleClose = () => {
    setOpen(false);
    setShowCartBtn(true);
  };

  return (
    <>
      {showCartBtn && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{
            display: { xs: "Block", md: "none" },
            width: "calc(100% - 32px)",
            position: "fixed",
            bottom: "8px",
            left: "16px",
            right: "16px",
            zIndex: 2000,
          }}
        >
          سبد خرید ({totalCount})
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className={style.modal}>
          <Box className={style.formSection}>
            <ShoppingCart />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ShoppingCartModal;
