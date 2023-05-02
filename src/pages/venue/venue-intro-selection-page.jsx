import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { fetchData } from "../../services/http-client";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import IntroSelectionLayout from "../../components/layout/intro-selection";
import Loading from "../../components/common/loading";

const VenueIntroSelectionPage = () => {
  const [cafeItemsData, setVenueItemsData] = useState();
  const [venueData, setVenueData] = useState();

  useEffect(() => {
    fetchData("/venue/places").then((fetchedData) =>
      setVenueItemsData(fetchedData)
    );

    fetchData("/venue").then((fetchedData) => setVenueData(fetchedData));
  }, []);

  const renderSelectionLayout = () => {
    return cafeItemsData && venueData ? (
      <IntroSelectionLayout itemsData={cafeItemsData} placeData={venueData} />
    ) : (
      <Box sx={{ minHeight: "80vh" }}>
        <Loading />
      </Box>
    );
  };

  return (
    <>
      <Header />
      {renderSelectionLayout()}
      <Footer />
    </>
  );
};

export default VenueIntroSelectionPage;
