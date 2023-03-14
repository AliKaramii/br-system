import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ItemSelectionCard from "../../common/card";
import ImageBackSection from "../../common/image-back-section";

const IntroSelectionLayout = ({ placeData, itemsData }) => {
  return (
    <>
      <ImageBackSection
        backImage={placeData.background}
        text={placeData.introText}
        title={placeData.title}
      />
      {/* <TitleList title={placeData.title} rules={placeData.rules} /> */}
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
                    <ItemSelectionCard
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      capacity={item.capacity}
                      ratting={item.ratting}
                      person={item.person}
                    />
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
