import React from "react";
import "./Menu.scss";

export const Menu = () => {
  return (
    <div className="menu__wrapper">
      <ul className="menu">
        <li>
          <a href="/">PREISE</a>
        </li>
        <li>
          <a href="/">REFRENZEN</a>
        </li>
        <li>
          <a href="/">KONTAKT</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
