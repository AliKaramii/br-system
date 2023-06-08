import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { fetchData } from "../../services/http-client";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import IntroSelectionLayout from "../../components/layout/intro-selection";
import Loading from "../../components/base/loading";

const CafeIntroSelectionPage = () => {
  const [cafeItemsData, setCafeItemsData] = useState();
  const [cafeData, setCafeData] = useState();

  useEffect(() => {
    fetchData("/cafe/places").then((fetchedData) =>
      setCafeItemsData(fetchedData)
    );

    fetchData("/cafe").then((fetchedData) => setCafeData(fetchedData));
  }, []);

  const renderSelectionLayout = () => {
    return cafeItemsData && cafeData ? (
      <IntroSelectionLayout
        itemsData={cafeItemsData}
        placeData={cafeData}
        module="cafe"
      />
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

export default CafeIntroSelectionPage;
