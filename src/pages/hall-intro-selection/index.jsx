import React from "react";
import ImageBackSection from "../../components/common/image-back-section";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import sectionBackground from "../../assets/images/hall-banner.jpg";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ItemSelectionCard from "../../components/common/card";
import sampleImage from "../../assets/images/hall-sample.png";
const HallIntroSelection = () => {
  //ToDo: move
  const SampleItems = [
    {
      name: "اتاق فکر شیشه ای",
      description: "جهت برگزاری جلسات مدیریت ",
      image: sampleImage,
      capacity: 10,
      ratting: 4,
      person: 130,
    },
    {
      name: "اتاق جلسات VIP",
      description: "جهت برگزاری جلسات مدیریت",
      image: sampleImage,
      capacity: 10,
      ratting: 4,
      person: 130,
    },
    {
      name: "سالن کنفرانس",
      description: "جهت برگزاری جلسات مدیریت",
      image: sampleImage,
      capacity: 10,
      ratting: 4,
      person: "130",
    },
    {
      name: "سالن همایش",
      description: "جهت برگزاری جلسات مدیریت",
      image: sampleImage,
      capacity: 10,
      ratting: 4,
      person: "130",
    },
  ];

  //* come from API
  const placeData = {
    introText: `از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.`,
    title: "اتاق سالن تشریفات",
    background: sectionBackground,
  };

  return (
    <>
      <Header />
      <ImageBackSection
        backImage={placeData.background}
        text={placeData.introText}
        title={placeData.title}
      />
      <Container>
        <Box marginY={4}>
          <Typography
            component="h2"
            className="primaryIconTitle"
            title={placeData.title}
          >
            امکانات کلی اتاق های تشریفات
          </Typography>
          <ul>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
            <li> طراحی گرافیک گفته می‌شود. طراح گرافیک از</li>
          </ul>
        </Box>
        <Box marginY={4}>
          <Typography component="h2" className="primaryIconTitle">
            اتاق های تشریفات
          </Typography>
          <div>
            <Grid container>
              {SampleItems.map((item) => {
                return (
                  <Grid item padding={1}>
                    <ItemSelectionCard
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      capacity={item.capacity}
                      ratting={item.ratting}
                      person={item.person}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HallIntroSelection;
