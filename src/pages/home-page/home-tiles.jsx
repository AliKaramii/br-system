import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const IconTiles = ({ data }) => {
  return (
    <div className={style.tileContainer}>
      {data.data.map((item, index) => {
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
