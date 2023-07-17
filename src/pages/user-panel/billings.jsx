import React, { useState } from "react";
import UserPanelLayoutMobile from "../../components/layout/user-panel";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import billingIcon from "../../assets/svg/user-panel-billing.svg";
import printer from "../../assets/svg/printer.svg";
import NotifMessageItem from "../../components/base/notif-message-item";
import BasicTable from "../../components/base/table";
import SearchBox from "../../components/base/search-box";
import CustomDatePicker from "../../components/base/custom-date-Time/date-picker";

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

const pageTitle = { icon: billingIcon, title: "شارژ و بدهی" };

const BillingsPage = () => {
  const [chosenDate, setChosenDate] = useState();
  return (
    <>
      <Box>
        <UserPanelLayoutMobile pageTitle={pageTitle}>
          <Stack direction="column" spacing={2}>
            <Container>
              <Grid
                container
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12} sm={6} md={8}>
                  <Stack direction="row" spacing={1} marginBottom={1}>
                    <SearchBox />
                    <Box>
                      <IconButton aria-label="delete" size="large">
                        <img src={printer} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    marginBottom={1}
                    direction="row"
                    spacing={1}
                    padding={1}
                    sx={{ border: "1px solid lightgray", borderRadius: "4px" }}
                  >
                    <CustomDatePicker
                      setChosenDate={setChosenDate}
                      width="110px"
                    />
                    <Typography component="p">تا</Typography>
                    <CustomDatePicker
                      setChosenDate={setChosenDate}
                      width="110px"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Container>
            <Container>
              <Grid container spacing={{ xs: 0, sm: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <NotifMessageItem
                    data={sampleData[0]}
                    align={"center"}
                    status={"success"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <NotifMessageItem
                    data={sampleData[1]}
                    align={"center"}
                    status="warning"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <NotifMessageItem data={sampleData[2]} align={"center"} />
                </Grid>
              </Grid>
            </Container>
            <Container>
              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                spacing={1}
              >
                <Typography padding={3} sx={{ textAlign: "center" }}>
                  صورت حساب شارژ و بدهی واحد ۲
                </Typography>
              </Stack>
              <Box sx={{ maxWidth: "80vw", overflow: "auto" }}>
                <BasicTable />
              </Box>
            </Container>
          </Stack>
        </UserPanelLayoutMobile>
      </Box>
    </>
  );
};

export default BillingsPage;
