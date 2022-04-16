import React, { useEffect } from "react";
import Checkbox from "../common/Checkbox";

function Header({ check, changeTheme, changeType }) {
  useEffect(() => {}, [changeType]);
  return (
    <header className="blog-header">
      <div className="layout layout-header">
        <div className="blog-logo">
          <a href="/">My Blog</a>
        </div>
        <div className="tabs">
          <button onClick={() => changeType("posts")}>Posts</button>
          <button onClick={() => changeType("users")}>Users</button>
        </div>
        <Checkbox checked={check} changeTheme={changeTheme} />
      </div>
    </header>
  );
}

export default Header;
