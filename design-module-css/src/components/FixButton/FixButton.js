import React, { useState } from "react";
import arrow from "../../img/arrow.svg";
import style from "./FixButton.module.css";

export const FixButton = () => {
  const [visible, setVisible] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  function TopScroll() {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className={style.arrow}>
      <img
        src={arrow}
        alt=""
        onClick={TopScroll}
        style={{ display: visible ? "block" : "none" }}
      ></img>
    </div>
  );
};
