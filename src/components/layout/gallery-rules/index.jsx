import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { Container } from "@mui/system";
import TitleList from "../../common/title-list";

const GalleryRulesLayout = ({ data }) => {
  const { images, name, rules } = data;

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
              <Box marginY={4} sx={{ maxHeight: "400px", overflow: "auto" }}>
                <TitleList title={"قوانین"} texts={rules} />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GalleryRulesLayout;
