import React from "react";
import style from "./Menu.module.css";
import logo from "../../../img/logo.svg";

export const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.menu__wrapper}>
        <div className={style.logo}>
          <img src={logo} alt=""></img>
        </div>
        <div className={style.menu__nav}>
          <nav className={style.navbar}>
            <select>
              <option value="">Cities</option>
            </select>

            <select>
              <option value="">Properties</option>
            </select>
            <a href="/">Blog</a>
            <a href="/">Video</a>
            <a href="/">Contacts</a>
          </nav>
        </div>

        <div className={style.auth}>
          <a href="/">Log in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
