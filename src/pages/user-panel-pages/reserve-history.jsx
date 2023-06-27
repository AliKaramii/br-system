import React, { useState } from "react";
import UserPanelLayout from "../../components/layout/user-panel";
import { Box, Container, Typography } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import reserveHistoryIcon from "../../assets/svg/user-panel-reserve-history.svg";
import Tab from "@mui/material/Tab";
import { theme } from "../../assets/themes/theme";
import PropTypes from "prop-types";
import ReserveListCard from "../../components/common/reserve-list-card";
import venueIcon from "../../assets/svg/user-panel-module-venue-24x24.svg";

import dateIcon from "../../assets/svg/reserve-lists-date.svg";
import timeIcon from "../../assets/svg/reserve-lists-time.svg";
import paymentIcon from "../../assets/svg/reserve-lists-payment.svg";
import statusIcon from "../../assets/svg/reserve-lists-status.svg";

const pageTitle = { icon: reserveHistoryIcon, title: "لیست رزروها" };

const sampleReserveData = [
  {
    placeIcon: venueIcon,
    title: "باشگاه ورزشی امید",
    tel: "0210000000",
  },
  [
    [dateIcon, "1402/05/20"],
    [timeIcon, "16:30"],
    [paymentIcon, "پرداخت در محل"],
    [statusIcon, "منقضی شده"],
  ],
];

const ReserveHistoryPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <Box sx={{ marginBottom: 5 }}>
            <Box
              sx={{
                boxShadow: "2px 2px 8px 0px #B7B7B7",
                direction: "rtl",
                borderRadius: "0.5rem",
                bgcolor: theme.palette.back.light9,
                width: "100%",
                maxWidth: { xs: 320, sm: 480, md: 700 },
                marginLeft: {
                  xs: "calc((100% - 320px)/2)",
                  sm: "calc((100% - 480px)/2)",
                  md: "calc((100% - 700px)/2)",
                },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                <Tab label="تمام رزروها" />
                <Tab label="استخر" />
                <Tab label="تشریفات" />
                <Tab label="مهدکودک" />
                <Tab label="پارکینگ" />
                <Tab label="خشکشویی" />
                <Tab label="حمل و نقل" />
                <Tab label="سینما" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <ReserveListCard data={sampleReserveData} />
              <ReserveListCard data={sampleReserveData} />
              <ReserveListCard data={sampleReserveData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              استخر
            </TabPanel>

            <TabPanel value={value} index={2}>
              تشریفات
            </TabPanel>
            <TabPanel value={value} index={3}>
              مهدکودک
            </TabPanel>
            <TabPanel value={value} index={4}>
              پارکینگ
            </TabPanel>
            <TabPanel value={value} index={5}>
              خشکشویی
            </TabPanel>
            <TabPanel value={value} index={6}>
              حمل و نقل
            </TabPanel>
            <TabPanel value={value} index={7}>
              سینما
            </TabPanel>
          </Box>
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default ReserveHistoryPage;
