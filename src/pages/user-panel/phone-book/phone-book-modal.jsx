import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import style from "./style.module.scss";
import HeaderAndBox from "../../../components/base/header-and-box";
import ContactMoreInfo from "./contact-more";
import RatingWithCount from "../../../components/base/Rating-with-count/rating-with-count";
import sampleAvarat from "../../../assets/images/venue-sample.png";
import PhoneBookComments from "./comments";
import { theme } from "../../../assets/themes/theme";
const sampleData = {
  name: "حسن حسینی",
  membershipDate: "1402/11/02",
  profission: "برق کار",
  tel: "0912111111",
  comments: [
    {
      avatar: sampleAvarat,
      name: "کاربر 1",
      date: "1402/04/11",
      body: "لورم ایپسوم یک متن پیش فرض برای طراحی های گرافیکی است",
    },
    {
      avatar: sampleAvarat,
      name: "کاربر 2",
      date: "1400/04/11",
      body: "لورم ایپسوم یک متن پیش فرض برای طراحی های فرض برای طراحی های فرض برای طراحی های گرافیکی است",
    },
  ],
};

const PhoneBookModal = ({ children }) => {
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
              اطلاعات بیشتر
            </Typography>
          </Box>
          <Box className={style.modalBody}>
            <ContactMoreInfo data={sampleData} />
            <Box marginY={3}>
              <RatingWithCount users={35} rate={3} aling="center" />
            </Box>
            <HeaderAndBox title="دیدگاه سایرین">
              {sampleData.comments.map((coment, index) => {
                return <PhoneBookComments key={index} data={coment} />;
              })}
            </HeaderAndBox>
          </Box>
          <Box className={style.buttonBox}>
            <Button>لغو</Button>
            <Button color="success">تایید</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default PhoneBookModal;
