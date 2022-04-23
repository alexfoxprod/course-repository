import React from "react";
import style from "./Main.module.css";
import MapForm from "./MapForm/MapForm";
import tel from "../../img/tel.svg";
import email from "../../img/email.svg";
import messenger from "../../img/messenger.svg";
import telegram from "../../img/telegram.svg";
import whatsup from "../../img/whatsup.svg";
import viberr from "../../img/viberr.svg";

export const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main__wrapper}>
        <span className={style.quote}>
          We are always in touch and will be happy to resolve any of your
          questions.
        </span>
        <MapForm />
        <div className={style.divider}></div>
        <div className={style.contacts__wrapper}>
          <div className={style.contacts_phone}>
            <h4 className={style.contacts_heading}>Phone</h4>
            <div className={style.phone}>
              <img src={tel} alt=""></img>
              <p>+34 965 020784</p>
            </div>
          </div>
          <div className={style.contacts_adress}>
            <h4 className={style.contacts_heading}>Office in Spain</h4>
            <div className={style.adress}>
              <p>
                Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB,
                first floor, 03189 - Orihuela Costa (Alicante), Spain
              </p>
            </div>
          </div>
          <div className={style.contacts_email}>
            <h4 className={style.contacts_heading}>E-mail</h4>
            <div className={style.email}>
              <img src={email} alt=""></img>
              <p>sales@wtgspain.com</p>
            </div>
          </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.social_media}>
          <h4>We are online</h4>
          <div className={style.social_items}>
            <div className={style.social_block}>
              <img src={whatsup} alt=""></img>
              <p>WhatsApp</p>
            </div>
            <div className={style.social_block}>
              <img src={viberr} alt=""></img>
              <p>Viber</p>
            </div>
            <div className={style.social_block}>
              <img src={messenger} alt=""></img>
              <p>Messenger</p>
            </div>
            <div className={style.social_block}>
              <img src={telegram} alt=""></img>
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
