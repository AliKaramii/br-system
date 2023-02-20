import { Button, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./style.module.scss";

const ItemSelectionCard = ({
  name,
  description,
  image,
  capacity,
  person,
  ratting,
}) => {
  return (
    <>
      <Paper sx={{ paddingBottom: "16px" }}>
        <img src={image} alt={`سالن ${name}`} />
        <Box sx={{ paddingX: "8px" }}>
          <Typography className="primaryTitle" component="h3">
            {name}
          </Typography>
          <Typography className="underlined" component="p">
            {description}
          </Typography>
          <div className="underlined">
            <Typography component="span">ظرفیت: {capacity} نفر</Typography>
          </div>
          <div className={style.cardRating}>
            <p>امتیاز</p>
            <div>
              <Rating size="small" defaultValue={ratting} dir="ltr" />
              <p>{`(${person}) نفر`}</p>
            </div>
          </div>
        </Box>
        <div className={style.btnBox}>
          <Button
            href="cafe/reservation"
            variant="outlined"
            className="primaryButton"
          >
            رزرو
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default ItemSelectionCard;
