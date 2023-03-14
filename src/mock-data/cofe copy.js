import sectionBackground from "../assets/images/cafe-banner.jpg";
import sampleImage from "../assets/images/cafe-sample.png";
import sampleImage2 from "../assets/images/cafe-sample2.png";
import sampleImage3 from "../assets/images/cafe-sample3.png";
import sampleImage4 from "../assets/images/cafe-sample4.png";
import cakeIcon from "../assets/svg/cafe-icon-cake.svg";
import drinkIcon from "../assets/svg/cafe-icon-drink.svg";
import friesIcon from "../assets/svg/cafe-icon-fries.svg";
import foodMenuItem from "../assets/images/cafe-sample.png";

import img from "../assets/images/cafe-sample.png";
import img2 from "../assets/images/cafe-sample2.png";

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

export const sampleCafeItems = [
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
  rules: [
    "حضور شما حتی بدون سفارش بلامانع است",
    "لطفا برای تغییر میز هماهنگ فرمایید",
    "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
    " استعمال دخانیات در فضای داخلی ممنوع است",
  ],
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
              id: 1,
              itemName: "نوشیدنی سرد  1",
              price: 600.0,
              amount: 11,
              max: 30,
              img: foodMenuItem,
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
            },
            {
              id: 2,
              itemName: "نوشیدنی سرد 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: 600.0,
              amount: 2,
              max: 30,
              img: foodMenuItem,
            },
          ],
        },
        {
          categoryTitle: "قهوه و شیک",
          subCategory: [
            {
              id: 3,
              itemName: "آیس کافی  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: 80,
              amount: 0,
              max: 20,
              img: foodMenuItem,
            },
            {
              id: 4,
              price: 200,
              amount: 3,
              itemName: "آیس کافی 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",

              max: 11,
              img: foodMenuItem,
            },
          ],
        },
        {
          categoryTitle: "دمنوش ها",
          subCategory: [
            {
              id: 5,
              itemName: "دمنوش  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: 50,
              amount: 0,
              max: 20,
              img: foodMenuItem,
            },
            {
              id: 6,
              itemName: "دمنوش 2",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: 6000,
              amount: 5,
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
              id: 7,
              itemName: "کیک شکلاتی  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
            {
              id: 8,
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
              id: 9,
              itemName: "نوشیدنی گرم 1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2000",
              max: 20,
              img: foodMenuItem,
            },
            {
              id: 10,
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
              id: 12,
              itemName: "کیک  1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "10000",
              max: 30,
              img: foodMenuItem,
            },
            {
              id: 13,
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
              id: 14,
              itemName: "دسر 1",
              ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
              price: "2000",
              max: 20,
              img: foodMenuItem,
            },
            {
              id: 15,
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

export const cafeMenuMock = [
  {
    groupTitle: "نوشیدنی ها",
    categoryTitle: "انواع اسموتی",
    id: 1,
    itemName: "نوشیدنی سرد  1",
    price: 200,
    amount: 1,
    max: 30,
    img: img2,
    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
  },
  {
    groupTitle: "نوشیدنی ها",
    categoryTitle: "انواع اسموتی",
    id: 2,
    itemName: "نوشیدنی سرد  2",
    price: 100,
    amount: 1,
    max: 30,
    img: img,
    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
  },
  {
    groupTitle: "نوشیدنی ها",
    categoryTitle: "انواع اسموتی",
    id: 3,
    itemName: "نوشیدنی سرد  3",
    price: 600,
    amount: 1,
    max: 30,
    img: img2,
    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
  },
];
