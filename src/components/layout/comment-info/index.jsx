import * as React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserComment from "../../common/user-comment";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

const CommentInfoLayout = ({ data }) => {
  //   const theme = useTheme();
  const [value, setValue] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const handleChangeIndex = (index) => {
  //     setValue(index);
  //   };

  return (
    <Box sx={{ bgcolor: "#f0f0f0", width: "100%" }}>
      <AppBar position="static" sx={{ bgcolor: "#f0f0f0", width: "100%" }}>
        <Tabs
          sx={{ color: "#444444" }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="دیدگاه ها" {...a11yProps(0)} />
          <Tab label="سوالات متداول" {...a11yProps(1)} />
          <Tab label="امکانات سالن" {...a11yProps(2)} />
          <Tab label="شرایط استفاده" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={value}
      onChangeIndex={handleChangeIndex}> */}
      <TabPanel value={value} index={0} dir="rtl">
        <UserComment data={data} />
      </TabPanel>
      <TabPanel value={value} index={1} dir="rtl">
        <span>سوالات متداول در باره ارائه این خدمت</span>
      </TabPanel>
      <TabPanel value={value} index={2} dir="rtl">
        <span>امکانات سالن </span>
      </TabPanel>
      <TabPanel value={value} index={3} dir="rtl">
        <span>شرایط استفاده </span>
      </TabPanel>
      {/* </SwipeableViews> */}
    </Box>
  );
};
export default CommentInfoLayout;
