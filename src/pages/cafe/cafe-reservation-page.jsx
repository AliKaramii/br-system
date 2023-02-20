import React from "react";
import Header from "../../components/layout/header";
import ReservationLayout from "../../components/layout/reservation";
import Footer from "../../components/layout/footer";

// ! come from API
import { cafeItemData } from "../../mock-data/cofe.js";
import { sampleComments } from "../../mock-data/comments.js";
// import { test } from "../../mock-data/testData.js";

const CafeReservationPage = () => {
  return (
    <>
      <Header />
      <ReservationLayout
        resevationData={cafeItemData}
        commentsData={sampleComments}
      />
      <Footer />
    </>
  );
};

export default CafeReservationPage;
