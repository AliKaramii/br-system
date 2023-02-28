import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddToCartCounterBtn from "../../common/add-to-cart-counter";
import BtnCircle from "../btn-circle";
import style from "./style.module.scss";

const MenuItemFood = ({ menuItems }) => {
  const menuItemData = menuItems.subCategory;

  return (
    <>
      {menuItemData.map((menuItem, index) => {
        return (
          <Card key={index} className={style.foodMenuItem}>
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
                <Typography>{menuItem.price} ریال</Typography>
                <BtnCircle text="+" />
                <AddToCartCounterBtn />
              </Box>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default MenuItemFood;
