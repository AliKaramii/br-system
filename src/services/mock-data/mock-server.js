// Home tile icons
import pathes from "../../router/pathes";
import cafeIcon from "../../assets/svg/icon-home-coffeeshop.svg";
import cinemaIcon from "../../assets/svg/icon-home-cinema.svg";
import resataurantIcon from "../../assets/svg/icon-home-resataurant.svg";
import parkingIcon from "../../assets/svg/icon-home-parking.svg";
import venueIcon from "../../assets/svg/icon-home-venue.svg";
import logisticsIcon from "../../assets/svg/icon-home-logistics.svg";
import poolIcon from "../../assets/svg/icon-home-pool.svg";

//Cafe Selection page icons
import sectionBackground from "../../assets/images/cafe-banner.jpg";
import sampleImage from "../../assets/images/cafe-sample.png";
import sampleImage2 from "../../assets/images/cafe-sample2.png";
import sampleImage3 from "../../assets/images/cafe-sample3.png";
import sampleImage4 from "../../assets/images/cafe-sample4.png";
import cakeIcon from "../../assets/svg/cafe-icon-cake.svg";
import drinkIcon from "../../assets/svg/cafe-icon-drink.svg";
import friesIcon from "../../assets/svg/cafe-icon-fries.svg";
import foodMenuItem from "../../assets/images/cafe-sample.png";

// Foodmenu  images
import img1 from "../../assets/images/foodMenu/1-min.png";
import img2 from "../../assets/images/foodMenu/2-min.png";
import img3 from "../../assets/images/foodMenu/3-min.png";
import img4 from "../../assets/images/foodMenu/4-min.png";
import img5 from "../../assets/images/foodMenu/5-min.png";
import img6 from "../../assets/images/foodMenu/6-min.png";
import img7 from "../../assets/images/foodMenu/7-min.png";
import img8 from "../../assets/images/foodMenu/8-min.png";
import img9 from "../../assets/images/foodMenu/9-min.png";
import img10 from "../../assets/images/foodMenu/10-min.png";
import img11 from "../../assets/images/foodMenu/11-min.png";
import img12 from "../../assets/images/foodMenu/12-min.png";
import img13 from "../../assets/images/foodMenu/13-min.png";
import img14 from "../../assets/images/foodMenu/14-min.png";
import img15 from "../../assets/images/foodMenu/15-min.png";
import img16 from "../../assets/images/foodMenu/16-min.png";
import img17 from "../../assets/images/foodMenu/17-min.png";
import img18 from "../../assets/images/foodMenu/18-min.png";

// import img from "../../assets/images/cafe-sample.png";
// import img2 from "../../assets/images/cafe-sample2.png";

// venue
import venueSampleImage from "../../assets/images/venue-sample.png";
import venueSampleImage2 from "../../assets/images/venue-sample2.png";
import venueSectionBackground from "../../assets/images/venue-banner.jpg";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/login", () => {
      return {
        otpKey: 11111,
      };
    });

    this.get("/home", () => {
      return {
        data: [
          {
            name: "رزرو کافی شاپ",
            icon: cafeIcon,
            path: pathes.CAFEINTROSELECTION,
          },
          {
            name: "رزرو تشریفات",
            icon: venueIcon,
            path: pathes.VENUEINTROSELECTION,
          },
          { name: "رزرو سینما", icon: cinemaIcon, path: "#" },
          { name: "رزرو رستوران", icon: resataurantIcon, path: "#" },
          { name: "رزرو پارکینگ", icon: parkingIcon, path: "#" },
          { name: "رزرو مهد کودک", icon: parkingIcon, path: "#" },
          { name: "رزرو استخر", icon: poolIcon, path: "#" },
          { name: "رزرو باشگاه ورزشی", icon: parkingIcon, path: "#" },
          { name: "رزرو حمل و نقل", icon: logisticsIcon, path: "#" },
        ],
      };
    });

    this.get("/comments", () => {
      return {
        data: [
          {
            userName: "محمد احمدی",
            date: "1400/11/1",
            likes: 11,
            disLikes: 5,
            commentBody:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است ",
            posetivePoints: ["کیفیت اتاق ها خوب بود", "سیستم گرمایشی عالی بود"],
            negativePoints: ["کیفیت اتاق ها خوب بود", "سیستم گرمایشی عالی بود"],
          },
          {
            userName: "سارا امیری",
            date: "1400/11/1",
            likes: 11,
            disLikes: 5,
            commentBody:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است ",
            posetivePoints: ["کیفیت اتاق ها خوب بود", "سیستم رزرو عالی بود"],
            negativePoints: ["کیفیت اتاق ها بد بود", "رسیدگی بد بود"],
          },
        ],
      };
    });

    this.get("/sampleCafeReceipt", () => {
      return {
        data: {
          message: "پرداخت و رزرو با موفقیت انجام شد",
          title: "کافی شاپ پینار",
          rows: ["تاریخ: 1402/03/05", "ساعت : 15:30", "قیمت: 3000000"],
        },
      };
    });

    this.get("/cafe", () => {
      return {
        data: {
          introText: `از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.`,
          title: "کافی شاپ",
          background: sectionBackground,
          rules: [
            "حضور شما حتی بدون سفارش بلامانع است",
            "لطفا برای تغییر میز هماهنگ فرمایید",
            "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
            "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
          ],
        },
      };
    });

    this.get("/cafe/places", () => {
      return {
        data: [
          {
            id: 111,
            name: "کافی شاپ تک ستاره",
            description: "جهت برگزاری جلسات مدیریت ",
            featuredImage: sampleImage,
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
            gallery: [
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
          },
          {
            id: 112,
            name: "کافی شاپ پینار",
            description: "جهت برگزاری جلسات مدیریت",
            featuredImage: sampleImage2,
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
            gallery: [
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
          },
          {
            id: 113,
            name: "کافی شاپ شاملو",
            description: "جهت برگزاری جلسات مدیریت",
            featuredImage: sampleImage3,
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
            gallery: [
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
          },
          {
            id: 114,
            name: "روف گاردن بار",
            description: "جهت برگزاری جلسات مدیریت",
            featuredImage: sampleImage4,
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
            gallery: [
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
          },
        ],
      };
    });

    this.get("/foodmenu", () => {
      return {
        data: [
          {
            groupTitle: "نوشیدنی ها",
            groupIcon: drinkIcon,
            category: [
              {
                categoryTitle: "انواع اسموتی",
                menuItems: [
                  {
                    id: 1,
                    itemName: "اسموتی  1",
                    price: 600.0,
                    amount: 11,
                    max: 30,
                    img: img1,
                    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
                  },
                  {
                    id: 2,
                    itemName: "اسموتی 2",
                    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
                    price: 600.0,
                    amount: 2,
                    max: 30,
                    img: img2,
                  },
                ],
              },
              {
                categoryTitle: "انواع قهوه و شیک",
                menuItems: [
                  {
                    id: 3,
                    itemName: "قهوه و شیک  1",
                    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
                    price: 80,
                    amount: 0,
                    max: 20,
                    img: img3,
                  },
                  {
                    id: 4,
                    price: 200,
                    amount: 3,
                    itemName: "قهوه و شیک 2",
                    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",

                    max: 11,
                    img: img4,
                  },
                ],
              },
              {
                categoryTitle: "انواع دمنوش ها",
                menuItems: [
                  {
                    id: 5,
                    itemName: "دمنوش  1",
                    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
                    price: 50,
                    amount: 0,
                    max: 20,
                    img: img5,
                  },
                  {
                    id: 6,
                    itemName: "دمنوش 2",
                    ing: "۲۰۰ سی‌سی شیر - ۱۰۰ سی سی پودر قهوه- نصف قاشق غذا خوری شکر",
                    price: 6000,
                    amount: 5,
                    max: 11,
                    img: img6,
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
                categoryTitle: " انواع کیک شکلاتی ",
                menuItems: [
                  {
                    id: 7,
                    itemName: "کیک شکلاتی  1",
                    ing: "1 اسلایس 300 گرمی کیک شکلاتی ای ",
                    price: "130000",
                    max: 30,
                    img: img7,
                  },
                  {
                    id: 8,
                    itemName: "کیک شکلاتی 2",
                    ing: "1 اسلایس 400 گرمی کیک شکلاتی ای ",
                    price: "150000",
                    max: 30,
                    img: img8,
                  },
                ],
              },
              {
                categoryTitle: "انواع کیک وانیلی",
                menuItems: [
                  {
                    id: 9,
                    itemName: "کیک وانیلی 1",
                    ing: "1 اسلایس 300 گرمی کیک وانیلی  ",
                    price: "150000",
                    max: 20,
                    img: img9,
                  },
                  {
                    id: 10,
                    itemName: "کیک وانیلی 2",
                    ing: "1 اسلایس 300 گرمی کیک وانیلی - تکه های میوه  ",
                    price: "160000",
                    max: 11,
                    img: img10,
                  },
                ],
              },
              {
                categoryTitle: "انواع کیک میوه ای ",
                menuItems: [
                  {
                    id: 11,
                    itemName: "کیک میوه ای 1",
                    ing: "1 اسلایس 300 گرمی کیک میوه ای ",
                    price: "120000",
                    max: 20,
                    img: img11,
                  },
                  {
                    id: 12,
                    itemName: "کیک میوه ای 2",
                    ing: "1 اسلایس 300 گرمی کیک میوه ای ",
                    price: "135000",
                    max: 11,
                    img: img12,
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
                categoryTitle: "انواع معجون ها",
                menuItems: [
                  {
                    id: 13,
                    itemName: "معجون  1",
                    ing: "بستنی اسکوپی - گردو - پسته ",
                    price: "200000",
                    max: 30,
                    img: img13,
                  },
                  {
                    id: 14,
                    itemName: "معجون 2",
                    ing: "بستنی اسکوپی - خامه - پسته سس شکلات",
                    price: "250000",
                    max: 30,
                    img: img14,
                  },
                ],
              },
              {
                categoryTitle: "معجون سیب  ها",
                menuItems: [
                  {
                    id: 15,
                    itemName: "سیب ساده 1",
                    ing: "600 گرم سیب زمینی - ادویه - سس",
                    price: "2000",
                    max: 20,
                    img: img15,
                  },
                  {
                    id: 16,
                    itemName: "سیب ویژه 2",
                    ing: "600 گرم سیب زمینی - ادویه - قارچ - پنیر ",
                    price: "2500",
                    max: 11,
                    img: img16,
                  },
                ],
              },
              {
                categoryTitle: "انواع سوخاری ها",
                menuItems: [
                  {
                    id: 17,
                    itemName: "سوخاری 1",
                    ing: "300 گرم قارچ تازه",
                    price: "65000",
                    max: 20,
                    img: img17,
                  },
                  {
                    id: 18,
                    itemName: "سوخاری 2",
                    ing: "200 گرم فیله مرغ",
                    price: "75000",
                    max: 11,
                    img: img18,
                  },
                ],
              },
            ],
          },
        ],
      };
    });

    this.get("/venue", () => {
      return {
        data: {
          introText: `از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.`,
          title: " سالن تشریفات",
          background: venueSectionBackground,
          rules: [
            "حضور شما حتی بدون سفارش بلامانع است",
            "لطفا برای تغییر میز هماهنگ فرمایید",
            "کنسلی رزرو تا یک ساعت قبل از ساعت رزرو انجام شود",
            "برای نهایت استفاده از هوای پاک، استعمال دخانیات در فضای داخلی ممنونع است",
          ],
        },
      };
    });

    this.get("/venue/places", () => {
      return {
        data: [
          {
            id: 222,
            name: "اتاق فکر شیشه ای",
            description: "جهت برگزاری جلسات مدیریت ",
            featuredImage: venueSampleImage,
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
            gallery: [
              {
                original: venueSampleImage,
                thumbnail: venueSampleImage,
              },
              {
                original: venueSampleImage2,
                thumbnail: venueSampleImage2,
              },
              {
                original: venueSampleImage,
                thumbnail: venueSampleImage,
              },
              {
                original: venueSampleImage2,
                thumbnail: venueSampleImage2,
              },
            ],
          },
          {
            id: 223,
            name: "اتاق جلسات VIP",
            description: "جهت برگزاری جلسات مدیریت",
            featuredImage: venueSampleImage2,
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
            gallery: [
              {
                original: venueSampleImage,
                thumbnail: venueSampleImage,
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
          },
          {
            id: 224,
            name: "سالن کنفرانس",
            description: "جهت برگزاری جلسات مدیریت",
            featuredImage: venueSampleImage,
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
            gallery: [
              {
                original: venueSampleImage,
                thumbnail: venueSampleImage,
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
          },
          {
            id: 225,
            name: "سالن همایش",
            description: "جهت برگزاری جلسات مدیریت",
            featuredImage: venueSampleImage2,
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
            gallery: [
              {
                original: venueSampleImage,
                thumbnail: venueSampleImage,
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
          },
        ],
      };
    });
  },
});
