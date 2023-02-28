import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddableFormFeild from "../../common/addable-form-field";
import style from "./style.module.scss";

const AddCommentModal = () => {
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
        ثبت دیدگاه
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
              دیدگاه شما
            </Typography>
            <Typography variant="p" component="p">
              درباره کافی شاپ پینار
            </Typography>
          </Box>

          <Grid
            id="modal-body"
            container
            spacing={2}
            className={style.modalBody}
          >
            <Grid item xs={12} md={6} className={style.formSection}>
              <div>
                <Typography variant="h6" component="h3" id="modal-body">
                  دیدگاه خود را شرح دهید
                </Typography>
                <form>
                  <div>
                    <label>عنوان نظر</label>
                    <br />
                    <input placeholder="وارد کنید" />
                  </div>
                  <div>
                    <label>نقاط قوت</label> <br />
                    <AddableFormFeild />
                  </div>
                  <div>
                    <label>نقاط ضعف</label> <br />
                    <AddableFormFeild />
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>ارسال دیدگاه به صورت ناشناس</label>
                  </div>

                  <Button variant="contained">ثبت دیدگاه</Button>
                </form>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={style.formSection}>
              <div>
                <Typography variant="p" component="h3">
                  دیگران را با نوشتن نظرات خود، برای انتخاب استخر شماره یک
                  راهنمایی کنید.
                </Typography>
                <Typography component="p">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با
                  تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                  است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                  و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با
                  تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                  است لورم ایپسوم متن لورم ایپسوم متن است
                </Typography>
                <div>
                  <input type="checkbox" />
                  <label>قوانین را مطالعه کردم</label>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
export default AddCommentModal;
