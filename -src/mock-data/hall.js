import sampleImage from "../assets/images/hall-sample.png";
import sampleImage2 from "../assets/images/hall-sample2.png";
import sectionBackground from "../assets/images/hall-banner.jpg";

export const SampleHallItems = [
  {
    name: "اتاق فکر شیشه ای",
    description: "جهت برگزاری جلسات مدیریت ",
    image: sampleImage,
    capacity: 15,
    ratting: 3,
    person: 130,
  },
  {
    name: "اتاق جلسات VIP",
    description: "جهت برگزاری جلسات مدیریت",
    image: sampleImage2,
    capacity: 22,
    ratting: 4,
    person: 59,
  },
  {
    name: "سالن کنفرانس",
    description: "جهت برگزاری جلسات مدیریت",
    image: sampleImage,
    capacity: 10,
    ratting: 4,
    person: 452,
  },
  {
    name: "سالن همایش",
    description: "جهت برگزاری جلسات مدیریت",
    image: sampleImage2,
    capacity: 50,
    ratting: 5,
    person: 20,
  },
];

export const hallData = {
  introText: `از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.`,
  title: " سالن تشریفات",
  background: sectionBackground,
  rules: [
    "حضور شما حتی بدون سفارش بلامانع است",
    "لطفا برای تغییر میز هماهنگ فرمایید",
    "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
    "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
  ],
};
