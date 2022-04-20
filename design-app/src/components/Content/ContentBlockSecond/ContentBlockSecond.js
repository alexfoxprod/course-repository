import React from "react";

export const ContentBlockSecond = ({ image }) => {
  return (
    <div className="contentblock__items">
      <div className="contentblock__text__box contentblock__text__box--opposite">
        <h3 className="contentblock__text__heading contentblock__text__heading--opposite">
          Webdesign Agentur
        </h3>
        <p className="contentblock__text contentblock__text--opposite">
          Wir sind ein wirksames Team von Programmierern und Designer und bieten
          professionelle Dienstlei stungen rund um’s Thema Webdesign und
          Online-Marketing an. Seit 2006 kultivieren wir.
        </p>
      </div>
      <div className="contentblock__picture__box contentblock__picture__box--opposite">
        <div className="contentblock__picture">
          <img src={image} alt="block-img"></img>
        </div>
        <span>Webdesign Agentur</span>
      </div>
    </div>
  );
};

export default ContentBlockSecond;
