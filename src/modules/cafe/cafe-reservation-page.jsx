import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rules";
import FoodMenuLayout from "../../components/layout/food-menu";
import { fetchData } from "../../services/http-client.js";
import CafeFormFirstStepModal from "./form-step-1-modal";

const CafeReservationPage = () => {
  const [commentData, setData] = useState();
  const [cafeItemData, setCafeItemData] = useState();
  const [cafeMenu, setCafeMenu] = useState();

  useEffect(() => {
    fetchData("/comments").then((fetchedData) => setData(fetchedData));
    fetchData("/cafe/places").then((fetchedData) =>
      setCafeItemData(fetchedData[0])
    );
    fetchData("/foodmenu").then((fetchedData) => setCafeMenu(fetchedData));
  }, []);

  return (
    <>
      <HeaderLayout />
      {cafeItemData && <GalleryRulesLayout data={cafeItemData} />}
      {cafeMenu && (
        <FoodMenuLayout menuData={cafeMenu}>
          <CafeFormFirstStepModal title={"کافی شاپ پینار"} />
        </FoodMenuLayout>
      )}
      {commentData && <CommentInfoLayout data={commentData} />}
      <FooterLayout />
    </>
  );
};

export default CafeReservationPage;
