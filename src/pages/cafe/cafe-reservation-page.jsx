// !come from API
import { sampleComments } from "../../mock-data/comments.js";
import { cafeItemData } from "../../mock-data/cofe.js";

import React from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rule-section";
import FoodMenuLayout from "../../components/layout/food-menu";

const { menu } = cafeItemData;

const CafeReservationPage = () => {
  return (
    <>
      <HeaderLayout />
      <GalleryRulesLayout data={cafeItemData} />
      <FoodMenuLayout menuData={menu} />
      <CommentInfoLayout data={sampleComments} />
      <FooterLayout />
    </>
  );
};

export default CafeReservationPage;
