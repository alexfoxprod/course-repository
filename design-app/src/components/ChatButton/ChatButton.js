import React, { useState } from "react";
import "./ChatButton.scss";
import chat from "../../img/chat.svg";

export const ChatButton = () => {
  const [visible, setVisible] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  return (
    <img
      src={chat}
      alt=""
      onClick={topFunction}
      className="chatBtn"
      style={{ display: visible ? "block" : "none" }}
    ></img>
  );
};
