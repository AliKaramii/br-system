import React from "react";
import logo from "../../../assets/svg/logo.svg";
import style from "./style.module.scss";
import TopSeperator from "../../base/primary-seperator-ill/top-seperator";
import BottomSeperator from "../../base/primary-seperator-ill/bottom-seperator";

const FooterLayout = ({ children }) => {
  return (
    <footer className={style.footerSection}>
      <TopSeperator />
      <div className={style.footerContent}>
        <img src={logo} alt="logo" />
        <p>تمامی حقوق این نرم‌افزار محفوظ و متعلق به فاطر رسانور می‌باشد </p>
      </div>
      <BottomSeperator />
    </footer>
  );
};

export default FooterLayout;
