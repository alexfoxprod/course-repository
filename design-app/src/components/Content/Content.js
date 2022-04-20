import React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBlockFirst from "./ContentBlockFirst/ContentBlockFirst";
import "./Content.scss";
import ContentBlockSecond from "./ContentBlockSecond/ContentBlockSecond";
import blockImg from "../../img/block-img.png";
import blockImg2 from "../../img/block-img2.png";
import blockImg3 from "../../img/block-img3.png";
import blockImg4 from "../../img/block-img4.png";

export const Content = () => {
  return (
    <div className="content">
      <ContentHeader />
      <div className="contentblock">
        <ContentBlockFirst image={blockImg} />
        <ContentBlockSecond image={blockImg2} />
        <ContentBlockFirst image={blockImg3} />
        <ContentBlockSecond image={blockImg4} />
      </div>
    </div>
  );
};

export default Content;
