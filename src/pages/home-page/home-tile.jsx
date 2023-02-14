import style from "./style.module.scss";
import cinemaIcon from "../../assets/svg/icon-home-cinema.svg";
import resataurantIcon from "../../assets/svg/icon-home-resataurant.svg";
import parkingIcon from "../../assets/svg/icon-home-parking.svg";
import hallIcon from "../../assets/svg/icon-home-hall.svg";
import logisticsIcon from "../../assets/svg/icon-home-logistics.svg";
import poolIcon from "../../assets/svg/icon-home-pool.svg";
import coffeeshopIcon from "../../assets/svg/icon-home-coffeeshop.svg";

import { Link } from "react-router-dom";

const IconTiles = () => {
  //ToDo: move
  const items = [
    { name: "رزرو تشریفات", icon: hallIcon, path: "hall" },
    { name: "رزرو سینما", icon: cinemaIcon, path: "#" },
    { name: "رزرو رستوران", icon: resataurantIcon, path: "#" },
    { name: "رزرو پارکینگ", icon: parkingIcon, path: "#" },
    { name: "رزرو کافی شاپ", icon: coffeeshopIcon, path: "#" },
    { name: "رزرو مهد کودک", icon: parkingIcon, path: "#" },
    { name: "رزرو استخر", icon: poolIcon, path: "#" },
    { name: "رزرو باشگاه ورزشی", icon: parkingIcon, path: "#" },
    { name: "رزرو حمل و نقل", icon: logisticsIcon, path: "#" },
  ];

  return (
    <div className={style.tileContainer}>
      {items.map((item, index) => {
        return (
          <div key={index} className={style.item}>
            <Link to={item.path}>
              <div className={style.itemBox}>
                <div className={style.itemArea}>
                  <img src={item.icon} alt={item.name} />
                </div>
              </div>
              <div>
                <p>{item.name}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IconTiles;
