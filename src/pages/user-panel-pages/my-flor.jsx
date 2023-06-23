import React from "react";
import UserPanelLayout from "../../components/layout/user-panel";
import { Box } from "@mui/material";
import myFlorIcon from "../../assets/svg/user-panel-myFlor.svg";

const pageTitle = { icon: myFlorIcon, title: "واحد من" };

const MyFlorPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>{"MyFlor"}</UserPanelLayout>;
      </Box>
    </>
  );
};

export default MyFlorPage;
