import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/header";
import FooterLayout from "../../components/layout/footer";
import CommentInfoLayout from "../../components/layout/comment-info";
import GalleryRulesLayout from "../../components/layout/gallery-rules";
import { fetchData } from "../../services/http-client.js";
import AccordionReserve from "../../components/layout/accordion-reserve";
import AccordionReservePrivate from "../../components/layout/accordion-reserve-private";

// ! get later from API
import menuIcon from "../../assets/svg/note-board-icon.svg";
import VenuePrivateReserveForm from "./form-private-reserve";

const VenueReservationPage = () => {
  const [commentData, setData] = useState();
  const [venueItemData, setVenueItemData] = useState();
  const [venueMenu, setVenueMenu] = useState();

  useEffect(() => {
    fetchData("/comments").then((fetchedData) => setData(fetchedData));
    fetchData("/venue/places").then((fetchedData) =>
      setVenueItemData(fetchedData[0])
    );
    fetchData("/sample-reserve-list").then((fetchedData) =>
      setVenueMenu(fetchedData)
    );
  }, []);

  return (
    <>
      <HeaderLayout />
      {venueItemData && <GalleryRulesLayout data={venueItemData} />}
      {venueMenu && (
        <AccordionReserve title="رزرو اتاق شیشه ای" icon={menuIcon}>
          {venueMenu}
        </AccordionReserve>
      )}
      {venueMenu && (
        <AccordionReservePrivate
          title="رزرو اختصاصی اتاق شیشه ای"
          icon={menuIcon}
        >
          <VenuePrivateReserveForm />
        </AccordionReservePrivate>
      )}
      {commentData && <CommentInfoLayout data={commentData} />}
      <FooterLayout />
    </>
  );
};

export default VenueReservationPage;
