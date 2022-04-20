import React from "react";
import logo from "../../../src/logo.png";
import "./Header.scss";
import headerImg from "../../img/bg.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__navigation">
        <div className="header__navigation__items">
          <img src={logo} alt=""></img>
        </div>
        <div className="header__navigation__items-right">
          <a href="/">Preise</a>
          <a href="/">Referenzen</a>
          <a href="/">Kontakt</a>
          <div className="header__language">
            <select
              className="header__language__select"
              name="languages"
              id="languages-select"
            >
              <option>EN</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header__slider">
        <img src={headerImg} alt="header-slider"></img>
      </div>
    </div>
  );
};

export default Header;
