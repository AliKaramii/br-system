import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CheckedIcon from "../../base/checked-icon";
import ImageGallery from "react-image-gallery";

const GalleryRulesLayout = ({ data }) => {
  const { images, name, rules } = data;

  return (
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
  );
};

export default GalleryRulesLayout;
