import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Grid,
  Accordion,
  Container,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
// import CafeFormAccordion from "./form-accordion-section";
// import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../../../assets/themes/theme";

// import pathes from "../../router/pathes";
// import { setReserveData } from "../../store/features/reservation-slice";

const AccordionReservePrivate = ({ children, title, icon }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Box marginY={2}>
        <Box>
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
              <Grid container spacing={2}>
                {children}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  );
};

export default AccordionReservePrivate;
