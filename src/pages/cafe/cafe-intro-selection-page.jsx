import React from "react";

import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import IntroSelectionLayout from "../../components/layout/intro-selection";

// ! come from API
import { SampleCofeItems, cafeData } from "../../mock-data/cofe.js";

const CafeIntroSelectionPage = () => {
  return (
    <>
      <Header />
      <IntroSelectionLayout itemsData={SampleCofeItems} placeData={cafeData} />
      <Footer />
    </>
  );
};

export default CafeIntroSelectionPage;
