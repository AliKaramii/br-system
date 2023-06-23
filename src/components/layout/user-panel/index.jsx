import React, { useEffect, useState } from "react";
import UserPanelLayoutMobile from "./mobile";
import UserPanelLayoutDesktop from "./desktop";

import dashboardIcon from "../../../assets/svg/menu-icon-dashboard.svg";
import reserveHistoryIcon from "../../../assets/svg/menu-icon-calendar.svg";
import notificationIcon from "../../../assets/svg/menu-icon-notification.svg";
import myFlorIcon from "../../../assets/svg/menu-icon-user-square.svg";
import phoneBookIcon from "../../../assets/svg/menu-icon-call.svg";
import billingIcon from "../../../assets/svg/menu-icon-billing.svg";
import supportIcon from "../../../assets/svg/menu-icon-send.svg";
import pathes from "../../../router/pathes";

const menuItems = [
  { title: "داشبورد", link: pathes.DASHBOARD, icon: dashboardIcon },
  { title: "واحد من", link: pathes.MYFLOR, icon: myFlorIcon },
  {
    title: "لیست رزروها",
    link: pathes.RESERVEHISTORY,
    icon: reserveHistoryIcon,
  },
  { title: "بدهی و شارژ", link: pathes.BILLINGS, icon: billingIcon },
  { title: "دفترچه تلفن", link: pathes.PHONEBOOK, icon: phoneBookIcon },
  { title: "اطلاع رسانی", link: "#", icon: notificationIcon },
  { title: "تیکت", link: "#", icon: supportIcon },
];

const UserPanelLayout = ({ children, pageTitle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      const mobile = window.matchMedia("(max-width:599px)").matches;
      setIsMobile(mobile);
    };
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  return isMobile ? (
    <UserPanelLayoutMobile menuItems={menuItems} pageTitle={pageTitle}>
      {children}
    </UserPanelLayoutMobile>
  ) : (
    <UserPanelLayoutDesktop menuItems={menuItems} pageTitle={pageTitle}>
      {children}
    </UserPanelLayoutDesktop>
  );
};

export default UserPanelLayout;
