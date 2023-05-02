// !come from API
import { cafeItemData } from "../../services/mock-data//cafe.js";

import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rules";
import FoodMenuLayout from "../../components/layout/food-menu";
import { fetchData } from "../../services/http-client.js";

const { menu } = cafeItemData;

const CafeReservationPage = () => {
  const [commentData, setData] = useState();

  useEffect(() => {
    fetchData("/comments").then((fetchedData) => setData(fetchedData));
  }, []);

  return (
    <>
      <HeaderLayout />
      <GalleryRulesLayout data={cafeItemData} />
      <FoodMenuLayout menuData={menu} />
      {commentData && <CommentInfoLayout data={commentData} />}
      <FooterLayout />
    </>
  );
};

export default CafeReservationPage;
