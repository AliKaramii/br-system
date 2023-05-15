import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rules";
import FoodMenuLayout from "../../components/layout/food-menu";
import { fetchData } from "../../services/http-client.js";

const VenueReservationPage = () => {
  const [commentData, setData] = useState();
  const [venueItemData, srtVenueItemData] = useState();
  const [venueMenu, srtVenueMenu] = useState();

  useEffect(() => {
    fetchData("/comments").then((fetchedData) => setData(fetchedData));
    fetchData("/venue/places").then((fetchedData) =>
      srtVenueItemData(fetchedData[0])
    );
    fetchData("/foodmenu").then((fetchedData) => srtVenueMenu(fetchedData));
  }, []);

  return (
    <>
      <HeaderLayout />
      {venueItemData && <GalleryRulesLayout data={venueItemData} />}
      {/* {venueMenu && <FoodMenuLayout menuData={venueMenu} />} */}MENU
      {commentData && <CommentInfoLayout data={commentData} />}
      <FooterLayout />
    </>
  );
};

export default VenueReservationPage;
