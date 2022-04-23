import React from "react";
import style from "./Banner.module.css";
import corner from "../../img/corner.svg";
import bannerImg from "../../img/bannerImg.svg";

export const Banner = () => {
  return (
    <div className={style.banner}>
      <div>
        <img src={corner} alt=""></img>
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <div className={style.line__before}></div>

          <span>WTG SPAIN</span>
        </div>

        <h1 className={style.heading}>
          Do you need <span>some help</span>?
        </h1>

        <p>Contact us right now and our team will do everything to help you.</p>

        <button className={style.contact__btn}>Contact us</button>
      </div>

      <div className={style.contactImg}>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
