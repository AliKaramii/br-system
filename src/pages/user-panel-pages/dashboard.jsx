import React from "react";
import UserPanelLayout from "../../components/layout/user-panel";
import { Box } from "@mui/material";
import dashboardIcon from "../../assets/svg/user-panel-dashboard.svg";

const pageTitle = { icon: dashboardIcon, title: "داشبورد" };

const DashboardPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>{"Dashboard"}</UserPanelLayout>
      </Box>
    </>
  );
};

export default DashboardPage;
