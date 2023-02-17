import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import GalleryHero from "../../common/gallery-hero";
import CheckedIcon from "../../base/checked-icon";
import MenuInTab from "../../common/menu-in-tab";
import CommentsInTab from "../../common/comments-in-tab";

const ReservationLayout = () => {
  return (
    <Container>
      <Grid container columnSpacing={3}>
        <Grid item md={6}>
          <GalleryHero />
        </Grid>
        <Grid item md={6}>
          <Paper elevation={1} sx={{ height: "450px" }}>
            <Box padding={3}>
              <Typography variant="h2" className="primaryTitle">
                کافی شاپ تک ستاره
              </Typography>
              <div>
                <strong>قوانین</strong>
                <p>
                  صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
                  از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
                  ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می
                  نماید،
                </p>
              </div>
              <Box marginY={4}>
                <ul className="iconList">
                  <li>
                    <CheckedIcon />
                    <p>نعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.</p>
                  </li>
                  <li>
                    <CheckedIcon />
                    <p>نعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.</p>
                  </li>
                  <li>
                    <CheckedIcon />
                    <p>نعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.</p>
                  </li>
                </ul>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <MenuInTab />
      </Grid>
      <Grid container>
        <CommentsInTab />
      </Grid>
    </Container>
  );
};

export default ReservationLayout;
