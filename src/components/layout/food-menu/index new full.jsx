import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import { Button, Container, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ShoppingCart from "../../common/shopping-cart";
import MenuItemFood from "./menu-item-food";
import style from "./style.module.scss";
import ShoppingCartModal from "../../common/shopping-cart/shopping-cart-modal";

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

function FoodMenuLayout({ menuData }) {
  // console.log("**menuData**", menuData);
  // const theme = useTheme();
  const [value, setValue] = useState(0);
  const [currentMenuData, setcurrentMenuData] = useState();
  const [currentMenuId, setcurrentMenuId] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  const handleUpdateMenu = (menuCatId) => {
    setcurrentMenuId(menuCatId); // Todo remove this state
    setcurrentMenuData(menuData[menuCatId].category);
    console.log("menuCatId:", menuCatId);
    console.log("menuData:", menuData[menuCatId].category);
    return;
  };

  // Todo remove this state from use effect
  useEffect(() => {
    handleUpdateMenu(currentMenuId);
  }, [currentMenuId]);

  return (
    <Container sx={{ marginBottom: 5 }}>
      <Box className={style.menuType}>
        {menuData.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => handleUpdateMenu(index)}
              sx={{ padding: "16px 8px" }}
            >
              <img src={item.groupIcon} alt="منو" />
              {item.groupTitle}
            </Button>
          );
        })}
      </Box>
      {currentMenuData.map(() => {
        return (
          // %%%%%%%%%%%%%%%%%%%%%%%%

          <Box sx={{ bgcolor: "#f0f0f0", width: "100%" }}>
            <AppBar
              position="static"
              sx={{ bgcolor: "#f0f0f0", width: "100%", boxShadow: "none" }}
            >
              <Tabs
                sx={{
                  color: "#444444",
                  borderBottom: "1px solid lightgray",
                  height: "55px",
                }}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                {/* {menuData.map((item, index) => {
                    return (
                      <Tab
                        label={item.category[index].categoryTitle}
                        {...a11yProps({ index })}
                      />
                    );
                  })} */}

                <Tab label="انواع اسموتی" {...a11yProps(0)} />
                <Tab label="قهوه و شیک" {...a11yProps(1)} />
                <Tab label="دمنوش ها" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            {/* <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}> */}

            {menuData.map((cat, b) => {
              // console.log("*****cat.category:", cat.category, "B:", b);
              const currentData = cat.category[b];
              // console.log("currentData:::", currentData);
              return (
                <TabPanel value={value} index={b} dir="rtl" key={b}>
                  <Grid container spacing={4}>
                    <Grid item md={8}>
                      <Grid container spacing={2}>
                        <MenuItemFood menuItems={currentData} indicator={b} />
                      </Grid>
                    </Grid>
                    <Grid item md={4}>
                      <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <ShoppingCart />
                      </Box>
                      <ShoppingCartModal />
                    </Grid>
                  </Grid>
                </TabPanel>
              );
            })}

            {/* </SwipeableViews> */}
          </Box>

          // %%%%%%%%%%%%%%%%%%%%%%%%
        );
      })}
    </Container>
  );
}

export default FoodMenuLayout;
