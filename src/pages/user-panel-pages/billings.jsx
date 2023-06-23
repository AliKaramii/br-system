import React from "react";
import UserPanelLayoutMobile from "../../components/layout/user-panel";
import { Box } from "@mui/material";
import billingIcon from "../../assets/svg/user-panel-billing.svg";

const pageTitle = { icon: billingIcon, title: "شارژ و بدهی" };

const BillingsPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayoutMobile pageTitle={pageTitle}>
          {"Billings"}
        </UserPanelLayoutMobile>
        ;
      </Box>
    </>
  );
};

export default BillingsPage;
