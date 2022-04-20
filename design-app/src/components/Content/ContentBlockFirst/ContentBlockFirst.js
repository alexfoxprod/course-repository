import React from "react";

export const ContentBlockFirst = ({ image }) => {
  return (
    <div className="contentblock__items">
      <div className="contentblock__picture__box">
        <div className="contentblock__picture">
          <img src={image} alt="block-img"></img>
        </div>
        <span>Webdesign Agentur</span>
      </div>
      <div className="contentblock__text__box">
        <h3 className="contentblock__text__heading">Webdesign Agentur</h3>
        <p className="contentblock__text">
          Wir sind ein wirksames Team von Programmierern und Designer und bieten
          professionelle Dienstlei stungen rund um’s Thema Webdesign und
          Online-Marketing an. Seit 2006 kultivieren wir.
        </p>
      </div>
    </div>
  );
};

export default ContentBlockFirst;
