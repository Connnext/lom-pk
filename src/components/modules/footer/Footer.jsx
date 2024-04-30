import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  ABOUT_ROUTE,
  ADDRESS,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  GUARANTEES_ROUTE,
  MAIL_ADRESS,
  NEWS_ROUTE,
  PAY_ROUTE,
  PHONE_NUMBER,
  TIME_WORK,
} from "./../../../utils/constants";

let phone = (
  <svg
    style={{ height: "16px", width: "21px", fill: "white" }}
    className="phone__img"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="512"
    height="512"
  >
    <path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" />
  </svg>
);
let mail = (
  <svg
    style={{ height: "16px", width: "21px", fill: "white" }}
    className="mail__img"
    xmlns="http://www.w3.org/2000/svg"
    id="Outline"
    viewBox="0 0 24 24"
    width="512"
    height="512"
  >
    <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
  </svg>
);
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <ul className="footer__navigation">
            <li className="footer__item">
              <h3 className="footer__title">Организация</h3>
              <Link className="footer__link" to={ABOUT_ROUTE}>
                О компании
              </Link>
              <Link className="footer__link" to={NEWS_ROUTE}>
                Новости
              </Link>
              <Link className="footer__link" to={GUARANTEES_ROUTE}>
                Гарантия и возврат
              </Link>
            </li>
            <li className="footer__item">
              <h3 className="footer__title">Как купить</h3>
              <Link className="footer__link" to={DELIVERY_ROUTE}>
                Доставка
              </Link>
              <Link className="footer__link" to={PAY_ROUTE}>
                Оплата
              </Link>
              <Link className="footer__link" to={CONTACTS_ROUTE}>
                Контакты
              </Link>
            </li>
            <li className="footer__item">
              <h3 className="footer__title">Мы на связи</h3>
              <div className="footer__link footer__phone">
                <div className="footer__phone--logo">{phone}</div>
                <Link className="footer__phone--link" to={PHONE_NUMBER}>
                  8 (812) 957-97-56
                </Link>
              </div>
              <div className="footer__link footer__mail">
                <div className="footer__mail--logo">{mail}</div>
                <Link className="footer__mail--link" to={MAIL_ADRESS}>
                  info@lom-pk.ru
                </Link>
              </div>
            </li>
            <li className="footer__item">
              <h3 className="footer__title">Наш адрес</h3>
              <Link className="footer__link" to={CONTACTS_ROUTE}>
                <u>{ADDRESS}</u>
              </Link>
              <p className="footer__link">{TIME_WORK}</p>
            </li>
          </ul>
          <button className="footer__button">Заказать звонок</button>
        </div>
        <hr className="footer__divider"></hr>
        <div className="footer__copyright">
          © Добро Пожаловать в Ломоносовский Печной Клуб! 2024 <br />
          Powered by Supreme Web Dev.
        </div>
      </div>
    </footer>
  );
}
