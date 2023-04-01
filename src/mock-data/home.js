import cinemaIcon from "../assets/svg/icon-home-cinema.svg";
import resataurantIcon from "../assets/svg/icon-home-resataurant.svg";
import parkingIcon from "../assets/svg/icon-home-parking.svg";
import hallIcon from "../assets/svg/icon-home-hall.svg";
import logisticsIcon from "../assets/svg/icon-home-logistics.svg";
import poolIcon from "../assets/svg/icon-home-pool.svg";
import cafeIcon from "../assets/svg/icon-home-coffeeshop.svg";
import pathes from "../router/pathes";

export const homeItems = [
  { name: "رزرو کافی شاپ", icon: cafeIcon, path: pathes.CAFEINTROSELECTION },
  { name: "رزرو تشریفات", icon: hallIcon, path: pathes.HALLINTROSELECTION },
  { name: "رزرو سینما", icon: cinemaIcon, path: "#" },
  { name: "رزرو رستوران", icon: resataurantIcon, path: "#" },
  { name: "رزرو پارکینگ", icon: parkingIcon, path: "#" },
  { name: "رزرو مهد کودک", icon: parkingIcon, path: "#" },
  { name: "رزرو استخر", icon: poolIcon, path: "#" },
  { name: "رزرو باشگاه ورزشی", icon: parkingIcon, path: "#" },
  { name: "رزرو حمل و نقل", icon: logisticsIcon, path: "#" },
];
