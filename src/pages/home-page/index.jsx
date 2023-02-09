import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Container } from "@mui/system";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <main
          style={{ height: "75vh", textAlign: "center", paddingTop: "20vh" }}
        >
          <h1>Home Page</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
