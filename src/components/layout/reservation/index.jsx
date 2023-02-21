import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CheckedIcon from "../../base/checked-icon";
import MenuInTab from "../../common/menu-in-tab";
import CommentInfoLayout from "../../layout/comment-info";
import ImageGallery from "react-image-gallery";
import "./style.scss";

const ReservationLayout = ({ resevationData, commentsData }) => {
  // !come from API
  const { images, menu, name, rules } = resevationData;

  return (
    <Container>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            isRTL={true}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ height: "440px" }}>
            <Box padding={3}>
              <Typography variant="mainIconTitle">{name}</Typography>
              <Box marginY={4}>
                <strong>قوانین</strong>
                <p>{rules}</p>
              </Box>
              <Box>
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
        <MenuInTab menuData={menu} />
      </Grid>
      <Grid container marginY={10}>
        <CommentInfoLayout data={commentsData} />
      </Grid>
    </Container>
  );
};

export default ReservationLayout;
