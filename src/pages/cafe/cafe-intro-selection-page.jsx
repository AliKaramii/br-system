import React, { useEffect } from "react";

import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import IntroSelectionLayout from "../../components/layout/intro-selection";

// ! come from API
import { sampleCafeItems, cafeData } from "../../mock-data/cafe.js";

const CafeIntroSelectionPage = () => {
  useEffect(() => {
    fetch("/api/cafe/places")
      .then((res) => {
        console.log("res:>", res);
        return res.json();
      })
      .then((data) => {
        console.log("data:>", data);
      });
  }, []);

  return (
    <>
      <Header />
      <IntroSelectionLayout itemsData={sampleCafeItems} placeData={cafeData} />
      <Footer />
    </>
  );
};

export default CafeIntroSelectionPage;
