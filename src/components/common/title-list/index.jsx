import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CheckedIcon from "../../base/checked-icon";

const TitleList = ({ title, rules }) => {
  return (
    <Box>
      <Typography component="strong" variant="strong" title={title}>
        {title}
      </Typography>
      <ul className="iconList">
        {rules.map((ruleItem, index) => {
          return (
            <li key={index}>
              <CheckedIcon />
              <p>{ruleItem}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default TitleList;
