import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ItemSelectionCard from "../../common/selection-card";
import ImageBackSection from "../../common/image-back-section";

const IntroSelectionLayout = ({ placeData, itemsData, module }) => {
  return (
    <>
      <ImageBackSection
        backImage={placeData.background}
        text={placeData.introText}
        title={placeData.title}
      />
      {/* <TitleList title={placeData.title} texts={placeData.rules} /> */}
      <Container>
        <Box id="items" marginY={8}>
          <Typography component="h2" variant="mainIconTitle">
            {placeData.title}
          </Typography>
          <div>
            <Grid container>
              {itemsData.map((item, index) => {
                return (
                  <Grid item padding={1} key={index}>
                    <ItemSelectionCard data={item} module={module} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default IntroSelectionLayout;
