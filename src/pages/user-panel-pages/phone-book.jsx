import React from "react";
import UserPanelLayout from "../../components/layout/user-panel";
import { Box } from "@mui/material";
import phoneBookIcon from "../../assets/svg/user-panel-phone-book.svg";

const pageTitle = { icon: phoneBookIcon, title: "دفترچه تلفن" };
const PhoneBookPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>{"Phone Book"}</UserPanelLayout>;
      </Box>
    </>
  );
};

export default PhoneBookPage;
