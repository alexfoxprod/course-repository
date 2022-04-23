import React from "react";
import arrow from "../../img/arrow.svg";
import style from "./FixButton.module.css";

export const FixButton = () => {
  function TopScroll() {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className={style.arrow}>
      <img src={arrow} alt="" onClick={TopScroll}></img>
    </div>
  );
};
