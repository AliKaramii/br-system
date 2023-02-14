import style from "./style.module.scss";
import { Link } from "react-router-dom";

// ! come from API
import { homeItems } from "../../mock-data/home.js";

const IconTiles = () => {
  return (
    <div className={style.tileContainer}>
      {homeItems.map((item, index) => {
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
