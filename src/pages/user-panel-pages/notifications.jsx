import React from "react";
import UserPanelLayoutMobile from "../../components/layout/user-panel";
import { Box } from "@mui/material";
import notificationsIcon from "../../assets/svg/user-panel-notification.svg";

const pageTitle = { icon: notificationsIcon, title: "اطلاع رسانی" };

const NotificationsPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayoutMobile pageTitle={pageTitle}>
          {"notification"}
        </UserPanelLayoutMobile>
        ;
      </Box>
    </>
  );
};

export default NotificationsPage;
