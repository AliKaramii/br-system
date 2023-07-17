import React from "react";
import UserPanelLayout from "../../../components/layout/user-panel";
import { Box, Container, Grid } from "@mui/material";
import dashboardIcon from "../../../assets/svg/user-panel-dashboard.svg";
import NotifMessageItem from "../../../components/base/notif-message-item";
import LatestReservesBox from "./box-latest-reserves";
import LatestSupportsBox from "./box-latest-supports";
import BillingBox from "./box-billing";
import PhonebookBox from "./box-phonebook";
import NotificationBox from "./box-notification";
import PaymentBox from "./box-payment-access";

const pageTitle = { icon: dashboardIcon, title: "داشبورد" };

const sampleData = [
  {
    title: "هزینه کل پرداختی ها",
    body: "124.124.000 ریال",
  },
  {
    title: "هزینه بدهی",
    body: "124.124.000 ریال",
  },
  {
    title: "وضعیت بستانکار",
    body: "124.124.000 ریال",
  },
];
const DashboardPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <NotifMessageItem
                  data={sampleData[0]}
                  align={"center"}
                  status={"success"}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <NotifMessageItem
                  data={sampleData[1]}
                  align={"center"}
                  status="warning"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <NotifMessageItem data={sampleData[2]} align={"center"} />
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <LatestReservesBox />
              </Grid>
              <Grid item xs={12} md={6}>
                <LatestSupportsBox />
              </Grid>
              <Grid item xs={12} md={6}>
                <BillingBox />
              </Grid>
              <Grid item xs={12} md={6}>
                <PhonebookBox />
              </Grid>
              <Grid item xs={12} md={6}>
                <NotificationBox />
              </Grid>
              <Grid item xs={12} md={6}>
                <PaymentBox />
              </Grid>
            </Grid>
          </Container>
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default DashboardPage;
