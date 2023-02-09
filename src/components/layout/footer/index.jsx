import React from "react";
import topPrimaryDivider from "../../../assets/svg/top-primary-divider.svg";
import bottomPrimaryDivider from "../../../assets/svg/bottom-primary-divider.svg";
import logo from "../../../assets/svg/logo.svg";

import style from "./style.module.scss";
const Footer = ({ children }) => {
  return (
    <footer className={style.footerSection}>
      <img src={topPrimaryDivider} alt="" />
      <div className={style.footerContent}>
        <img src={logo} alt="logo" />
        <p>تمامی حقوق این نرم‌افزار محفوظ و متعلق به فاطر رسانور می‌باشد </p>
      </div>
      <img src={bottomPrimaryDivider} alt="" />
    </footer>
  );
};

export default Footer;
