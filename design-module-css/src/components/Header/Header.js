import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import Menu from "./Menu/Menu";
export const Header = () => {
  return (
    <div id="header">
      <TopHeader />
      <Menu />
    </div>
  );
};

export default Header;
