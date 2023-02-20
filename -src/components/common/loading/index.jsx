import React from "react";
import style from "./style.module.scss";

function Loading() {
  return (
    <>
      <div className={style.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loading;
