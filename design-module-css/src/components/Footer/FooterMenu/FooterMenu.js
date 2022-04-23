import React from "react";
import style from "./FooterMenu.module.css";
import mobile from "../../../img/mobile.svg";
import mail_white from "../../../img/mail_white.svg";
import location from "../../../img/location.svg";
import facebook from "../../../img/facebook.svg";
import inst from "../../../img/inst.svg";
import linkedin from "../../../img/linkedin.svg";
import youtube from "../../../img/youtube.svg";
import question from "../../../img/q.svg";
import { Rating } from "@mui/material";

export const FooterMenu = () => {
  return (
    <div className={style.footer_menu}>
      <div className={style.contacts}>
        <div className={style.contacts_heading}>
          <h4>Contacts:</h4>
          <div className={style.contacts_list}>
            <div className={style.phone}>
              <img src={mobile} alt=""></img>
              <p>+34 (965) 020 - 784</p>
            </div>
            <div className={style.email}>
              <img src={mail_white} alt=""></img>
              <p>sales@wtgspain.com</p>
            </div>
            <div className={style.adress}>
              <img src={location} alt=""></img>
              <p>
                Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB,
                first floor, 03189 - Orihuela Costa (Alicante), Spain
              </p>
            </div>
            <div className={style.rating}>
              <span>Rating 4.9/5: </span>
              <div>
                <Rating
                  className={style.stars}
                  value={4.9}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </div>
              <span>820 votes</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.type}>
        <div className={style.type_heading}>
          <h4>Type:</h4>
          <div className={style.type_items}>
            <a href="/">Appartaments</a>
            <a href="/">Penthousses</a>
            <a href="/">Townhouses</a>
            <a href="/">Commercial</a>
            <a href="/">Bungalows</a>
            <a href="/">Duplexes</a>
            <a href="/">Villas</a>
          </div>
        </div>
      </div>
      <div className={style.follow_us}>
        <div className={style.follow_heading}>
          <h4>Follow us:</h4>
          <div className={style.follow_media}>
            <div className={style.media_group}>
              <img src={facebook} alt=""></img>
              <p>Facebook</p>
            </div>
            <div className={style.media_group}>
              <img src={youtube} alt=""></img>
              <p>YouTube</p>
            </div>
            <div className={style.media_group}>
              <img src={linkedin} alt=""></img>
              <p>Linkedin</p>
            </div>
            <div className={style.media_group}>
              <img src={inst} alt=""></img>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className={style.subscribe_block}>
          <div className={style.subscribe_title}>
            <p>Subscribe to new objects</p>
            <img src={question} alt=""></img>
          </div>
          <div className={style.subscribe_form}>
            <input placeholder="Your email" type="email"></input>
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
