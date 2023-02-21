import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./style.module.scss";

const MenuItemFood = ({ menuItem }) => {
  console.log(menuItem);
  return (
    <>
      {menuItem.map((item, index) => {
        return (
          <Card className={style.menuItem} key={index}>
            <Box className={style.menuItemImage}>
              <img src={item.img} alt={item.name} />
            </Box>
            <Box className={style.meuItemContent}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="p" component="div">
                  {item.itemName}
                </Typography>
                <span>{item.ing}</span>
              </Box>
              <Box className={style.meuItemPurchase}>
                <Typography>{item.price} ریال</Typography>
                <Button
                  sx={{
                    background: "#6a14d1",
                    borderRadius: "40px",

                    height: "30px",
                    color: "#fff",
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default MenuItemFood;
