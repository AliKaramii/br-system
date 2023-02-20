import React from "react";
import Header from "../../components/layout/header";
import ReservationLayout from "../../components/layout/reservation";
import Footer from "../../components/layout/footer";

// ! come from API
// import { SampleCofeItems, cafeData } from "../../mock-data/cofe.js";

const CafeReservationPage = () => {
  return (
    <>
      <Header />
      <ReservationLayout />
      <Footer />
    </>
  );
};

export default CafeReservationPage;
