import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import homeHeroIcon from "../../assets/svg/home-hero-ill.svg";
import BottomSeperator from "../../components/base/primary-seperator-ill/bottom-seperator";
import TopSeperator from "../../components/base/primary-seperator-ill/top-seperator";
import style from "./style.module.scss";

const HomeHero = () => {
  return (
    <>
      <TopSeperator />
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={style.heroIntro}>
            <Typography variant="mainTitle" component="h2">
              سامانه رزرو ساختمان نیرا
            </Typography>

            <p>
              در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از
              این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه
              اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از
              نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className={style.heroIll}>
            <img src={homeHeroIcon} alt="hero" />
          </Grid>
        </Grid>
      </Container>
      <BottomSeperator />
    </>
  );
};

export default HomeHero;
