import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import home from "../../../assets/svg/toolbar-icon-home.svg";
import chat from "../../../assets/svg/toolbar-icon-chat.svg";
import support from "../../../assets/svg/toolbar-icon-support.svg";
import notification from "../../../assets/svg/menu-icon-notification.svg";

import { Link } from "react-router-dom";
import pathes from "../../../router/pathes";

const ToolboxMenu = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginRight={7}
    >
      <Link to={pathes.NOTIFICATIONS} title="اطلاح رسانی">
        <IconButton>
          <img src={notification} />
        </IconButton>
      </Link>
      <Link title="پشتیبانی">
        <IconButton>
          <img src={support} />
        </IconButton>
      </Link>
      <Link title="سوالات متداول">
        <IconButton>
          <img src={chat} />
        </IconButton>
      </Link>
      <Link to={pathes.HOMEPAGE} title="خانه">
        <IconButton>
          <img src={home} />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default ToolboxMenu;
