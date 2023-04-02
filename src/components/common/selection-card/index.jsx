import { Button, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import pathes from "../../../router/pathes";
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
    <Paper className={style.cardContainer}>
      <img src={image} alt={`سالن ${name}`} className={style.cardImage} />
      <Box>
        <Typography variant="mainTitle" component="h3" marginY={3}>
          {name}
        </Typography>
        <Typography className="underlined" component="p" marginY={2}>
          {description}
        </Typography>
        <div className="underlined">
          <Typography component="span" marginY={2}>
            ظرفیت: {capacity} نفر
          </Typography>
        </div>
        <div className={style.cardRating}>
          <p>امتیاز</p>
          <Box display="flex">
            <Rating size="small" defaultValue={ratting} dir="ltr" />
            <p>{`(${person}) نفر`}</p>
          </Box>
        </div>
      </Box>
      <div className={style.btnBox}>
        <Button
          href={pathes.CAFERESERVATION}
          variant="outlined"
          className="primaryButton"
        >
          رزرو
        </Button>
      </div>
    </Paper>
  );
};

export default ItemSelectionCard;
