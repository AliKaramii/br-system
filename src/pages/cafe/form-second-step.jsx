import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import FormSecondStepLayout from "../../components/layout/reservation-form-second-step";

// !
import iconClock from "../../assets/svg/reservation-icon-calendar.svg";
import iconCalendar from "../../assets/svg/reservation-icon-clock.svg";
import iconCafe from "../../assets/svg/reservation-icon-cafe.svg";
const icons = { iconClock, iconCalendar, iconCafe };

const FormSecondStepPage = () => {
  return (
    <>
      <Header />
      <FormSecondStepLayout icons={icons} />
      <Footer />
    </>
  );
};

export default FormSecondStepPage;
