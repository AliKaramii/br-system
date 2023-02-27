import sectionBackground from "../assets/images/cofe-banner.jpg";
import sampleImage from "../assets/images/cofe-sample.png";
import sampleImage2 from "../assets/images/cofe-sample2.png";
import sampleImage3 from "../assets/images/cofe-sample3.png";
import sampleImage4 from "../assets/images/cofe-sample4.png";
import cakeIcon from "../assets/svg/cofe-icon-cake.svg";
import drinkIcon from "../assets/svg/cofe-icon-drink.svg";
import friesIcon from "../assets/svg/cofe-icon-fries.svg";
import foodMenuItem from "../assets/images/food-menu-item.png";
// * Cafe Selection
export const cafeData = {
  introText: `از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.`,
  title: "کافی شاپ",
  background: sectionBackground,
  rules: [
    "حضور شما حتی بدون سفارش بلامانع است",
    "لطفا برای تغییر میز هماهنگ فرمایید",
    "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
    "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
  ],
};
export const SampleCofeItems = [
  {
    name: "کافی شاپ تک ستاره",
    description: "جهت برگزاری جلسات مدیریت ",
    image: sampleImage,
    capacity: 15,
    ratting: 3,
    person: 130,
    ruleDescription:
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    rules: [
      "حضور شما حتی بدون سفارش بلامانع است",
      "لطفا برای تغییر میز هماهنگ فرمایید",
      "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    ],
  },
  {
    name: "کافی شاپ پینار",
    description: "جهت برگزاری جلسات مدیریت",
    image: sampleImage2,
    capacity: 22,
    ratting: 4,
    person: 59,
    ruleDescription:
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    rules: [
      "حضور شما حتی بدون سفارش بلامانع است",
      "لطفا برای تغییر میز هماهنگ فرمایید",
      "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    ],
  },
  {
    name: "کافی شاپ شاملو",
    description: "جهت برگزاری جلسات مدیریت",
    image: sampleImage3,
    capacity: 10,
    ratting: 4,
    person: 452,
    ruleDescription:
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    rules: [
      "حضور شما حتی بدون سفارش بلامانع است",
      "لطفا برای تغییر میز هماهنگ فرمایید",
      "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    ],
  },
  {
    name: "روف گاردن بار",
    description: "جهت برگزاری جلسات مدیریت",
    image: sampleImage4,
    capacity: 50,
    ratting: 5,
    person: 20,
    ruleDescription:
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    rules: [
      "حضور شما حتی بدون سفارش بلامانع است",
      "لطفا برای تغییر میز هماهنگ فرمایید",
      "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
      "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
    ],
  },
];

// * Cafe  reservation
export const cafeItemData = {
  name: "کافی شاپ تک ستاره",
  rules:
    "صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید ",
  images: [
    {
      original: sampleImage2,
      thumbnail: sampleImage2,
    },
    {
      original: sampleImage,
      thumbnail: sampleImage,
    },
    {
      original: sampleImage3,
      thumbnail: sampleImage3,
    },
    {
      original: sampleImage4,
      thumbnail: sampleImage4,
    },
  ],
  menu: [
    {
      groupTitle: "نوشیدنی ها",
      groupIcon: drinkIcon,
      category: [
        {
          categoryTitle: "انواع اسموتی",
          subCategory: [
            {
              itemName: "نوشیدنی سرد  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
            {
              itemName: "نوشیدنی سرد 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
          ],
        },
        {
          categoryTitle: "قهوه و شیک",
          subCategory: [
            {
              itemName: "آیس کافی  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2000",
              max: 20,
              img: foodMenuItem,
            },
            {
              itemName: "آیس کافی 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2500",
              max: 11,
              img: foodMenuItem,
            },
          ],
        },
        {
          categoryTitle: "دمنوش ها",
          subCategory: [
            {
              itemName: "دمنوش  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2000",
              max: 20,
              img: foodMenuItem,
            },
            {
              itemName: "دمنوش 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2500",
              max: 11,
              img: foodMenuItem,
            },
          ],
        },
      ],
    },

    {
      groupTitle: "کیک ها",
      groupIcon: cakeIcon,
      category: [
        {
          categoryTitle: "انواع کیک ",
          subCategory: [
            {
              itemName: "کیک شکلاتی  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
            {
              itemName: "کیک وانیلی 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
          ],
        },
        {
          categoryTitle: "انواع دسر",
          subCategory: [
            {
              itemName: "نوشیدنی گرم 1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2000",
              max: 20,
              img: foodMenuItem,
            },
            {
              itemName: "نوشیدنی گرم 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2500",
              max: 11,
              img: foodMenuItem,
            },
          ],
        },
      ],
    },
    {
      groupTitle: "میان وعده ها",
      groupIcon: friesIcon,
      category: [
        {
          categoryTitle: "کیک ها",
          subCategory: [
            {
              itemName: "کیک  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
            {
              itemName: "کیک 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
          ],
        },
        {
          categoryTitle: "دسر ها",
          subCategory: [
            {
              itemName: "دسر 1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2000",
              max: 20,
              img: foodMenuItem,
            },
            {
              itemName: "دسر 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2500",
              max: 11,
              img: foodMenuItem,
            },
          ],
        },
      ],
    },
  ],
};
