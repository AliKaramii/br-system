// !come from API
import { sampleComments } from "../../mock-data/comments.js";
import { cafeItemData } from "../../mock-data/cofe.js";

import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rule-section";
import FoodMenuLayout from "../../components/layout/food-menu";

const { menu } = cafeItemData;

const ReservationPage = () => {
  return (
    <>
      <HeaderLayout />
      <Container>
        <GalleryRulesLayout data={cafeItemData} />
        <Grid container>
          <FoodMenuLayout menuData={menu} />
        </Grid>
        <Grid container marginY={10}>
          <CommentInfoLayout data={sampleComments} />
        </Grid>
      </Container>
      <FooterLayout />
    </>
  );
};

export default ReservationPage;
