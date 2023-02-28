import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CheckedIcon from "../../base/checked-icon";
import ImageGallery from "react-image-gallery";
import { Container } from "@mui/system";

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
              <Box marginY={4}>
                <strong>قوانین</strong>
                <ul className="iconList">
                  {rules.map((rule, index) => {
                    return (
                      <li key={index}>
                        <CheckedIcon />
                        <p>{rule}</p>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GalleryRulesLayout;
