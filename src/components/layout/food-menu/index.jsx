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
import Loading from "../../base/loading";
import { theme } from "../../../assets/themes/theme";

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

function FoodMenuLayout({ menuData, children }) {
  // const theme = useTheme();
  const [value, setValue] = useState(0);
  const [currentMenuData, setCurrentMenuData] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  const handleUpdateMenu = (menuCatId) => {
    setCurrentMenuData(menuData[menuCatId]);
    return;
  };

  // Todo remove this state from use effect
  useEffect(() => {
    setCurrentMenuData(menuData[0]);
  }, []);

  return currentMenuData ? (
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

      <Box sx={{ bgcolor: theme.palette.reserveMenu.back, width: "100%" }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: theme.palette.reserveMenu.back,
            width: "100%",
            boxShadow: "none",
          }}
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

            {currentMenuData.category.map((catItem, index) => {
              const { categoryTitle } = catItem;
              return (
                <Tab key={index} label={categoryTitle} {...a11yProps(index)} />
              );
            })}
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}> */}

        {currentMenuData.category.map((cat, b) => {
          const { menuItems } = cat;
          return (
            <TabPanel value={value} index={b} dir="rtl" key={b}>
              <Grid container spacing={4}>
                <Grid item md={8}>
                  <Grid container spacing={2}>
                    <MenuItemFood menuItems={menuItems} />
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <ShoppingCart>{children}</ShoppingCart>
                  </Box>
                  <ShoppingCartModal>{children}</ShoppingCartModal>
                </Grid>
              </Grid>
            </TabPanel>
          );
        })}

        {/* </SwipeableViews> */}
      </Box>
    </Container>
  ) : (
    <Loading />
  );
}

export default FoodMenuLayout;
