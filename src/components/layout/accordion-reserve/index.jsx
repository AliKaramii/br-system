import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Grid,
  Button,
  Accordion,
  Container,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import style from "./style.module.scss";
// import CafeFormAccordion from "./form-accordion-section";
// import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionReserveTable from "./table";
import SliderBtn from "../../base/btn-slider";
import { theme } from "../../../assets/themes/theme";

// import pathes from "../../router/pathes";
// import { setReserveData } from "../../store/features/reservation-slice";

const AccordionReserve = ({ children, title, icon }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Box marginY={2}>
        <Box className={style.formBody}>
          <form>
            <Accordion
              sx={{ bgcolor: theme.palette.reserveMenu.back }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={icon} alt="icon" />
                  <Typography sx={{ marginX: 1 }}>{title} </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SliderBtn />
                </Box>
                <Grid container marginY={2}>
                  <AccordionReserveTable data={children} />
                </Grid>
              </AccordionDetails>
            </Accordion>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default AccordionReserve;
