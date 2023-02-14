import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ImageBackSection from "../../components/common/image-back-section";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ItemSelectionCard from "../../components/common/card";

// ! come from API
import { SampleItems, placeData } from "../../mock-data/hall.js";

const HallIntroSelection = () => {
  return (
    <>
      <Header />
      <ImageBackSection
        backImage={placeData.background}
        text={placeData.introText}
        title={placeData.title}
      />
      <Container>
        <Box marginY={4}>
          <Typography
            component="h2"
            className="primaryIconTitle"
            title={placeData.title}
          >
            امکانات کلی اتاق های تشریفات
          </Typography>
          <ul>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
          </ul>
        </Box>
        <Box marginY={4}>
          <Typography component="h2" className="primaryIconTitle">
            اتاق های تشریفات
          </Typography>
          <div>
            <Grid container>
              {SampleItems.map((item) => {
                return (
                  <Grid item padding={1}>
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
      <Footer />
    </>
  );
};

export default HallIntroSelection;
