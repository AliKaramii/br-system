import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import FormStepper from "../../components/common/stepper";
import CheckoutItemCard from "../../components/common/checkout-card";
import GeneralDataShowModal from "../../components/common/modal-general-data-show";
import { useDispatch, useSelector } from "react-redux";
import iconClock from "../../assets/svg/reservation-icon-calendar.svg";
import iconCalendar from "../../assets/svg/reservation-icon-clock.svg";
import venueIcon from "../../assets/svg/note-board-icon.svg";
import {
  Box,
  Grid,
  Radio,
  Button,
  Checkbox,
  Accordion,
  TextField,
  Container,
  RadioGroup,
  FormControl,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Typography,
} from "@mui/material";
import style from "./style.module.scss";
// import CafeFormAccordion from "./form-accordion-section";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import userIcon from "../../assets/svg/reservation-icon-user.svg";
import paymentIcon from "../../assets/svg/reservation-icon-payment.svg";
import pathes from "../../router/pathes";
import { setReserveData } from "../../store/features/reservation-slice";

const sampleRulesData = {
  title: "قوانین استفاده از سالن",
  body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند",
};

const validationSchema = yup.object({
  name: yup.string().min(1, "*").required("*"),
  phone: yup.string().min(1, "*").required("*"),
  unitId: yup.string().min(1, "*").required("*"),
  payment: yup.string().required("*"),
  terms: yup.string().required("*"),
});

const VenueFormStepPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [goToNextStep, setGoToNextStep] = useState(false);
  const [allowToNext, setAllowToNext] = useState(false);

  const navigating = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const reserveData = useSelector((state) => state.reservation);
  const { title, date, time } = reserveData;

  const handleTerms = () => {
    setAllowToNext(!allowToNext);
  };

  useEffect(() => {
    if (goToNextStep) {
      return navigating(pathes.CHECKOUT);
    }
  }, [goToNextStep]);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      unitId: "",
      payment: "",
      terms: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { name, phone, unitId, payment } = values;
      dispatch(
        setReserveData({
          name: name,
          phone: phone,
          unitId: unitId,
          payment: payment,
        })
      );
      setGoToNextStep(true);
    },
  });

  return (
    <>
      <Header />
      <Container>
        <FormStepper activeStep={1} />
        <Box marginY={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <CheckoutItemCard text={title} icon={venueIcon} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckoutItemCard text={`تاریخ رزرو :${date}`} icon={iconClock} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckoutItemCard
                text={`ساعت رزرو: ${time}`}
                icon={iconCalendar}
              />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={2}>
          <Box className={style.formHeader}>
            <Typography component="h3" variant="p">
              رزرو {title}
            </Typography>
          </Box>
          <Box className={style.formBody}>
            <form onSubmit={formik.handleSubmit}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={userIcon} alt="icon" />
                    <Typography sx={{ marginX: 1 }}>اطلاعات کاربر</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="standard"
                        sx={{ marginBottom: 4 }}
                        fullWidth
                        id="name"
                        name="name"
                        label="نام کاربر"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helpertext={formik.touched.name && formik.errors.name}
                      />
                      <TextField
                        variant="standard"
                        sx={{ marginBottom: 4 }}
                        fullWidth
                        id="phone"
                        name="phone"
                        label="شماره تماس"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phone && Boolean(formik.errors.phone)
                        }
                        helpertext={formik.touched.phone && formik.errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="standard"
                        sx={{ marginBottom: 4 }}
                        fullWidth
                        id="unitId"
                        name="unitId"
                        label="شماره واحد"
                        value={formik.values.unitId}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.unitId && Boolean(formik.errors.unitId)
                        }
                        helpertext={
                          formik.touched.unitId && formik.errors.unitId
                        }
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={paymentIcon} alt="icon" />
                    <Typography sx={{ marginX: 1 }}>نوع پرداخت</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl>
                    <RadioGroup
                      id="payment"
                      name="payment"
                      label="شماره واحد"
                      defaultValue="cashOnDelivery"
                      value={formik.values.payment}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.payment && Boolean(formik.errors.payment)
                          ? "true"
                          : "false"
                      }
                      helpertext={
                        formik.touched.payment && formik.errors.payment
                      }
                      aria-labelledby="demo-radio-buttons-group-label"
                    >
                      <FormControlLabel
                        value="cashOnDelivery"
                        control={<Radio />}
                        label="پرداخت در محل"
                      />

                      <FormControlLabel
                        disabled
                        value="onlinePayment"
                        control={<Radio />}
                        label="پرداخت اینترنتی"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Box marginY={2}>
                <FormControlLabel
                  sx={{ margin: "0" }}
                  control={
                    <Checkbox
                      id="terms"
                      name="terms"
                      value={formik.values.terms}
                      onChange={formik.handleChange}
                      onClick={handleTerms}
                      error={
                        formik.touched.terms && Boolean(formik.errors.terms)
                          ? "true"
                          : "false"
                      }
                      helpertext={formik.touched.terms && formik.errors.terms}
                    />
                  }
                ></FormControlLabel>
                <GeneralDataShowModal data={sampleRulesData}>
                  <Typography variant="span" className="link-style-text">
                    قوانین
                  </Typography>
                </GeneralDataShowModal>
                <span> را مطالعه کردم</span>
              </Box>
              <Box className="flexRowReverse">
                {/* <Link to="/checkout"> */}
                <Button
                  variant="outlined"
                  type="submit"
                  disabled={!allowToNext}
                >
                  مرحله بعد
                </Button>
                {/* </Link> */}
              </Box>
            </form>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default VenueFormStepPage;
