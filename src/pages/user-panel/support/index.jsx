import React, { useState } from "react";
import UserPanelLayout from "../../../components/layout/user-panel";
import { Box } from "@mui/material";
import supportIcon from "../../../assets/svg/user-panel-support.svg";
import TicketList from "./tickets-list";
import TicketDetails from "./tickets-detail";

const pageTitle = { icon: supportIcon, title: "پشتیبانی" };

const SupportPage = () => {
  const [viewDetail, setviewDetail] = useState(false);

  const handleView = (val) => {
    setviewDetail(val);
  };

  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          {viewDetail ? (
            <TicketDetails handleView={handleView} />
          ) : (
            <>
              <TicketList handleView={handleView} />
            </>
          )}
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default SupportPage;
