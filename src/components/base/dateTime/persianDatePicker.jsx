import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const PersianDatePicker = () => {
  return (
    <div>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        placeholder="انتخاب تاریخ"
        calendarPosition="bottom-right"
        minDate={new DateObject({ calendar: persian }).set("date", 5)}
        // maxDate={new DateObject({ calendar: persian }).set("date", 15)}
        // minDate="1402/2/5"
        // maxDate="1402/2/20"
      />
    </div>
  );
};

export default PersianDatePicker;
