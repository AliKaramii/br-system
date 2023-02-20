import React from "react";
import FooterLayout from "../../components/layout/footer";
import HeaderLayout from "../../components/layout/header";
import IntroSelectionLayout from "../../components/layout/intro-selection";

// ! come from API
import { SampleHallItems, hallData } from "../../mock-data/hall.js";

const HallIntroSelectionPage = () => {
  return (
    <>
      <HeaderLayout />
      <IntroSelectionLayout itemsData={SampleHallItems} placeData={hallData} />
      <FooterLayout />
    </>
  );
};

export default HallIntroSelectionPage;
