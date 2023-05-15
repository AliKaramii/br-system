import { Button, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import pathes from "../../../router/pathes";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ItemSelectionCard = ({ data, module }) => {
  const { name, description, featuredImage, capacity, person, ratting, id } =
    data;
  return (
    <Paper className={style.cardContainer}>
      <img
        src={featuredImage}
        alt={`سالن ${name}`}
        className={style.cardImage}
      />
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
        <Link to={`/${module}-reserve/${id}`}>
          <Button variant="outlined" className="primaryButton">
            رزرو
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default ItemSelectionCard;
