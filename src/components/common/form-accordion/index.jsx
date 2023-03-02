import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

import userIcon from "../../../assets/svg/reservation-icon-user.svg";
import paymentIcon from "../../../assets/svg/reservation-icon-payment.svg";

export default function FormAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
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
            <Typography>اطلاعات کاربر</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> نام کاربر </Typography>
          <Typography> شماره واحد </Typography>
          <Typography> شماره تماس </Typography>
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
            <Typography>نوع پرداخت</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>پرداخت در محل</Typography>
          <Typography>پرداخت از کیف پول</Typography>
          <Typography>پرداخت اینترنتی</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
