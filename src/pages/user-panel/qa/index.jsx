import * as React from "react";
import PropTypes from "prop-types";
import UserPanelLayout from "../../../components/layout/user-panel";
import { Box } from "@mui/material";
import qaIcon from "../../../assets/svg/user-panel-qa.svg";

// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { theme } from "../../../assets/themes/theme";

import AccordionQa from "./qa-accordion2";
const pageTitle = { icon: qaIcon, title: "سوالات متداول" };

const QaPage = ({ data }) => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  //   const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <Box sx={{ bgcolor: "#FAFAFA", width: "100%" }}>
            <AppBar
              elevation={0}
              position="static"
              sx={{
                bgcolor: "#fff",
                width: "100%",
                border: "1px solid #6a14d1",
                borderRadius: "8px",
              }}
            >
              <Tabs
                sx={{
                  color: "#444444",
                  bgcolor: "#ffff",
                  borderRadius: "8px",
                }}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="تنظیمات" {...a11yProps(0)} />
                <Tab label="شرایط رزروها" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            {/* <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}> */}
            <TabPanel value={value} index={0} dir="rtl">
              <AccordionQa />
            </TabPanel>
            <TabPanel value={value} index={1} dir="rtl">
              <AccordionQa />
            </TabPanel>

            {/* </SwipeableViews> */}
          </Box>
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default QaPage;
