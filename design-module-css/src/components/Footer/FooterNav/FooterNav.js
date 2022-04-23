import React from "react";
import style from "./FooterNav.module.css";

export const FooterNav = () => {
  return (
    <div className={style.footer_nav}>
      <a href="/">All cities</a>
      <a href="/">Blog</a>
      <a href="/">Video</a>
      <a href="/">Contacts</a>
    </div>
  );
};

export default FooterNav;
