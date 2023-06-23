import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddToCartCounterBtn from "../../common/add-to-cart-counter";
import style from "./style.module.scss";

const MenuItemFood = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((menuItem, index) => {
        return (
          <Grid item xs={12} md={6} key={index}>
            <Card className={style.foodMenuItem}>
              <Box className={style.menuItemImage}>
                <img src={menuItem.img} alt={menuItem.itemName} />
              </Box>
              <Box className={style.meuItemContent}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="p" component="div">
                    {menuItem.itemName}
                  </Typography>
                  <span>{menuItem.ing}</span>
                </Box>
                <Box className={style.meuItemPurchase}>
                  <Typography>{menuItem.price} تومان</Typography>
                  <AddToCartCounterBtn id={menuItem.id} />
                </Box>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default MenuItemFood;
