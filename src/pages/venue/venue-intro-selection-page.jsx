import React from "react";
import FooterLayout from "../../components/layout/footer";
import HeaderLayout from "../../components/layout/header";
import IntroSelectionLayout from "../../components/layout/intro-selection";

// ! come from API
import { SampleVenueItems, venueData } from "../../services/mock-data/venue.js";

const VenueIntroSelectionPage = () => {
  return (
    <>
      <HeaderLayout />
      <IntroSelectionLayout
        itemsData={SampleVenueItems}
        placeData={venueData}
      />
      <FooterLayout />
    </>
  );
};

export default VenueIntroSelectionPage;
