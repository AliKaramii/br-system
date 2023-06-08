import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import IconTiles from "./home-tiles";
import HomeHero from "./home-hero";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [tilesData, setTilesData] = useState();

  useEffect(() => {
    fetch("/api/home")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTilesData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <HomeHero />

      <Container>
        <main
          style={{ minHeight: "75vh", textAlign: "center", paddingTop: "75px" }}
        >
          <Typography variant="mainIconTitle" component="h2">
            بخش های قابل رزرو
          </Typography>
          {tilesData && <IconTiles data={tilesData} />}
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
