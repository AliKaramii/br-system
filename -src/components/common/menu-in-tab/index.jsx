import * as React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Cart from "../shopping-cart";
import style from "./style.module.scss";
import cakeIcon from "../../../assets/svg/cofe-icon-cake.svg";
import drinkIcon from "../../../assets/svg/cofe-icon-drink.svg";
import friesIcon from "../../../assets/svg/cofe-icon-fries.svg";
import MenuItemFood from "../../base/menu-item-food";

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

export default function MenuInTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Box className={style.menuType}>
        <Button>
          <img src={friesIcon} alt="منو" />
          کیک ها
        </Button>
        <Button>
          <img src={drinkIcon} alt="منو" />
          نوشیدنی ها
        </Button>
        <Button>
          <img src={cakeIcon} alt="منو" />
          میان وعده
        </Button>
      </Box>
      <Box sx={{ bgcolor: "#f0f0f0", width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "#f0f0f0" }}>
          <Tabs
            sx={{ color: "#444444" }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="red"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="نوشیدنی های گرم" {...a11yProps(0)} />
            <Tab label="نوشیدنی های سرد" {...a11yProps(1)} />
            <Tab label="نوشیدنی دم نوش ها" {...a11yProps(2)} />
            <Tab label="نوشیدنی میوه ای" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={value}
      onChangeIndex={handleChangeIndex}> */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container columnSpacing={3}>
            <Grid item md={4}>
              <Cart />
            </Grid>
            <Grid item container md={8} sx={{ direction: "rtl" }}>
              <Grid md={6}>
                <MenuItemFood />
                <MenuItemFood />
              </Grid>
              <Grid md={6}>
                <MenuItemFood />
                <MenuItemFood />
                <MenuItemFood />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container columnSpacing={3}>
            <Grid item md={4}>
              <Cart />
            </Grid>
            <Grid item container md={8} sx={{ direction: "rtl" }}>
              <Grid md={6}>
                <MenuItemFood />
                <MenuItemFood />
                <MenuItemFood />
              </Grid>
              <Grid md={6}>
                <MenuItemFood />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        {/* </SwipeableViews> */}
      </Box>
    </>
  );
}
