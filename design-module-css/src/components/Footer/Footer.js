import React from "react";
import style from "./Footer.module.css";
import logo from "../../img/footerLogo.svg";
import FooterNav from "./FooterNav/FooterNav";
import FooterMenu from "./FooterMenu/FooterMenu";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__wrapper}>
        <div className={style.footer__header}>
          <div className={style.footer_logo}>
            <img src={logo} alt=""></img>
          </div>
          <h3 className={style.footerHeading}>
            <span>THE BEST</span> REAL ESTATE IN SPAIN
          </h3>
        </div>
        <div className={style.divider}></div>
        <FooterNav />
        <FooterMenu />
        <div className={style.copyright}>
          <p>
            The company "WTG Spain" specializes in the investment and sale of
            real estate in Spain, and the provision of legal and consulting
            services. All rights reserved. "WTG Spain" - The Best Real Estate in
            Spain. © Copyright 2007 - 2020.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
