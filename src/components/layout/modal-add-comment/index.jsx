import React, { useState } from "react";
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
import AddableFormFeild from "../../common/addable-form-field";
import { useFormik } from "formik";
import * as yup from "yup";
import style from "./style.module.scss";

const validationSchema = yup.object({
  desc: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .max(300, "طولانی تر از حداکثر کاراکتر مجاز ")
    .required("توضیحات را وارد کنید"),
});

const AddCommentModal = () => {
  const [open, setOpen] = useState(false);
  const [posPoints, setPosPoints] = useState("POS");
  const [negPoints, setNegPoints] = useState("NEG");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setValues = () => {
    formik.values.negPoints = negPoints;
    formik.values.posPoints = posPoints;
  };

  const formik = useFormik({
    initialValues: {
      desc: "",
      posPoints: "",
      negPoints: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setValues();
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
                      id="desc"
                      name="desc"
                      label="توضیحات"
                      value={formik.values.desc}
                      onChange={formik.handleChange}
                      error={formik.touched.desc && Boolean(formik.errors.desc)}
                      helperText={formik.touched.desc && formik.errors.desc}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <AddableFormFeild
                      pointListTaker={setPosPoints}
                      label="نقاط قوت"
                      id="posPoints"
                      name="posPoints"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <AddableFormFeild
                      pointListTaker={setNegPoints}
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
