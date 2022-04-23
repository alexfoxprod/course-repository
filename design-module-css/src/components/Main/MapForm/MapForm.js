import React from "react";
import style from "./MapForm.module.css";
import map from "../../../img/map.png";

export const MapForm = () => {
  return (
    <div className={style.mapform}>
      <div className={style.mapform__wrapper}>
        <div className={style.map}>
          <img src={map} className={style.map__img} alt=""></img>
        </div>
        <div className={style.form_wrapper}>
          <h3>Contact us</h3>
          <form className={style.form}>
            <input placeholder="Name"></input>
            <input placeholder="Phone"></input>
            <input placeholder="E-mail"></input>
            <textarea placeholder="Message" rows="6"></textarea>
            <button type="submit">Send</button>
          </form>
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default MapForm;
