import React from "react";
import { Box, Typography } from "@mui/material";
import CheckedIcon from "../../base/checked-icon";

const TitleList = ({ title, texts }) => {
  return (
    <Box>
      <Typography component="strong" variant="strong" title={title}>
        {title}
      </Typography>
      <ul className="iconList">
        {texts.map((textItem, index) => {
          return (
            <li key={index}>
              <CheckedIcon />
              <p>{textItem}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default TitleList;
