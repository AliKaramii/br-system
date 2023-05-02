import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker"; // just digital
// import TimePicker from "react-multi-date-picker/plugins/analog_time_picker"; // digital analog
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const PersianTimePicker = () => {
  return (
    <DatePicker
      placeholder="انتخاب ساعت"
      disableDayPicker
      format="HH:mm"
      plugins={[<TimePicker hideSeconds />]}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
    />
  );
};

export default PersianTimePicker;
