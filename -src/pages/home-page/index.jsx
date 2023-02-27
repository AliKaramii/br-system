import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";
import IconTiles from "./home-tiles";
import HomeHero from "./home-hero";
import { Typography } from "@mui/material";

const HomePage = () => {
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
          <IconTiles />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
