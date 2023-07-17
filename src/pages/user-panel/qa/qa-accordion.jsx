import React, { useState } from "react";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../../../assets/themes/theme";
import qaIcon from "../../../assets/svg/toolbar-icon-chat.svg";

const AccordionQa = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        elevation={0}
        sx={{
          bgcolor: theme.palette.back.light9,
          borderBottom: `1px solid ${theme.palette.border.dark1}`,
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={qaIcon} alt="icon" />
            <Typography sx={{ marginX: 1 }}>عنوان نمایشی </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
          <Grid container marginY={2}>
            محتوای آکاردئون
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionQa;
