import { Box, Stack } from "@mui/material";
import React from "react";
import home from "../../../assets/svg/toolbar-icon-home.svg";
import chat from "../../../assets/svg/toolbar-icon-chat.svg";
import support from "../../../assets/svg/toolbar-icon-support.svg";
import { Link } from "react-router-dom";

const ToolboxMenu = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      marginX={7}
      marginTop={1}
    >
      <Link title="پشتیبانی">
        <img src={support} />
      </Link>
      <Link title="سوالات متداول">
        <img src={chat} />
      </Link>
      <Link to="/" title="خانه">
        <img src={home} />
      </Link>
    </Stack>
  );
};

export default ToolboxMenu;
