import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CheckedIcon from "../../base/checked-icon";

const TitleList = ({ title, rules }) => {
  return (
    <Container>
      <Box marginY={4}>
        <Typography component="h2" variant="mainIconTitle" title={title}>
          امکانات کلی {title}
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
    </Container>
  );
};

export default TitleList;
