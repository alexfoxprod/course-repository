import React from "react";
import "./ContactForm.scss";
import map from "../../img/map.svg";
import mail from "../../img/mail.svg";
import phone from "../../img/phone.svg";

export const ContactForm = () => {
  return (
    <div className="contact__wrapper">
      <div className="contact__wrapper__info">
        <div className="contact__info">
          <div className="contact__adress">
            <img
              src={map}
              style={{ width: "60px", height: "60px" }}
              alt=""
            ></img>
            <span>Poststr, 45, 44890 Hamburg</span>
          </div>
          <div className="contact__email">
            <img
              src={mail}
              style={{ width: "60px", height: "60px" }}
              alt=""
            ></img>
            <span>HELLO@TRATATA.DE</span>
          </div>
          <div className="contact__phone">
            <img
              src={phone}
              style={{ width: "60px", height: "60px" }}
              alt=""
            ></img>
            <span>040 380-33- 44</span>
          </div>
        </div>
      </div>
      <div className="contact__wrapper__form">
        <h2>Schreiben Sie uns!</h2>
        <form className="form">
          <input placeholder="Firma / Organisation"></input>
          <div className="form__divider">
            <input placeholder="E-mail" type="email"></input>
            <input placeholder="Telefon" type="tel"></input>
          </div>
          <textarea placeholder="Was ist ihr anliegen?" rows="6"></textarea>
          <input className="submit-btn" type="submit" value="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
