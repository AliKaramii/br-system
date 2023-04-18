import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddableFormFeild from "../../common/addable-form-field";
import style from "./style.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  date: yup
    .string()
    .min(3, "عنوان نظر")
    .max(300, "تاریخ  ")
    .required("عنوان نظر را وارد کنید"),
});

const AddCommentModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      return setOpen(false);
    },
  });

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

          <Box className={style.formSection}>
            <form onSubmit={formik.handleSubmit}>
              <Grid
                id="modal-body"
                container
                spacing={2}
                className={style.modalBody}
              >
                <Grid item xs={12}>
                  <div>
                    <Typography variant="h6" component="h3" id="modal-body">
                      دیدگاه خود را شرح دهید
                    </Typography>
                    <TextField
                      variant="standard"
                      sx={{ marginBottom: 2 }}
                      fullWidth
                      id="title"
                      name="title"
                      label="عنوان نظر"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
                      helperText={formik.touched.title && formik.errors.title}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <AddableFormFeild
                      label="نقاط قوت"
                      id="posPoints"
                      name="posPoints"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <AddableFormFeild
                      label="نقاط ضعف"
                      id="negPoints"
                      name="negPoints"
                    />
                  </div>
                </Grid>
                <Grid container marginTop={3}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <FormControlLabel
                        sx={{ margin: "0" }}
                        control={<Checkbox />}
                        // disabled
                      ></FormControlLabel>
                      ارسال به صورت ناشناس
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box className="flexRowReverse">
                      <Button variant="outlined" type="submit">
                        ثبت دیدگاه
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default AddCommentModal;
