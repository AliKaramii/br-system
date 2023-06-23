import React from "react";
import UserPanelLayout from "../../components/layout/user-panel/";
import { Box } from "@mui/material";

import reserveHistoryIcon from "../../assets/svg/user-panel-reserve-history.svg";

const pageTitle = { icon: reserveHistoryIcon, title: "لیست رزروها" };

const ReserveHistoryPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          {"ReserveHistory"}
        </UserPanelLayout>
        ;
      </Box>
    </>
  );
};

export default ReserveHistoryPage;
