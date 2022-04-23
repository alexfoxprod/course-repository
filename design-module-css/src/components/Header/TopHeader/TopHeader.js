import React from "react";
import style from "./TopHeader.module.css";
import phone from "../../../img/phone.svg";
import viber from "../../../img/viber.svg";
import mail from "../../../img/mail.svg";
import flag from "../../../img/flag.svg";
import hurt from "../../../img/hurt.svg";

export const TopHeader = () => {
  return (
    <div className={style.topheader}>
      <div className={style.topheader__wrapper}>
        <div className={style.contacts}>
          <div className={style.whatsup}>
            <img src={mail} alt=""></img>
            <span>sales@wtgspain.com</span>
          </div>
          <div className={style.phone}>
            <img src={phone} alt=""></img>
            <span>+34 965 020784</span>
          </div>
          <div className={style.viber}>
            <img src={viber} alt=""></img>
            <span>WhatsApp</span>
          </div>
        </div>
        <div className={style.language_flag}>
          <img src={hurt} alt=""></img>
          <img src={flag} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
