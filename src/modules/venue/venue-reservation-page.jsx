import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rules";
import { fetchData } from "../../services/http-client.js";

const VenueReservationPage = () => {
  const [commentData, setData] = useState();
  const [venueItemData, setVenueItemData] = useState();
  const [venueMenu, setVenueMenu] = useState();

  useEffect(() => {
    fetchData("/comments").then((fetchedData) => setData(fetchedData));
    fetchData("/venue/places").then((fetchedData) =>
      setVenueItemData(fetchedData[0])
    );
    fetchData("/foodmenu").then((fetchedData) => setVenueMenu(fetchedData));
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
