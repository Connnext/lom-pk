import React from "react";
import { Link } from "react-router-dom";
import "./contacts.css";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  GUARANTEES_ROUTE,
  NEWS_ROUTE,
  PAY_ROUTE,
} from "../../../../utils/constants";
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
//import location from "./../../../../img/location.png";
//import phone from "./../../../../img/phone.png";
//import logo from "./../../img/logo.png";

export default function ContactsNav() {
  return (
    <>
      <div className="contacts">
        <div className="container">
          <nav className="nav__bar">
            <ul className="nav__items">
              <li className="nav__item">
                <Link className="nav__link" to={ABOUT_ROUTE}>
                  О компании
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={CONTACTS_ROUTE}>
                  Контакты
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={PAY_ROUTE}>
                  Оплата
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={DELIVERY_ROUTE}>
                  Доставка
                </Link>
              </li>
              {/* <li className="nav__item">
                <Link className="nav__link" to={NEWS_ROUTE}>
                  Новости
                </Link>
              </li> */}
              <li className="nav__item">
                <Link className="nav__link" to={GUARANTEES_ROUTE}>
                  Гарантии и возврат
                </Link>
              </li>
            </ul>
            <div className="nav__item--phone">
              <div className="nav__phone">
                <div className="nav__phone--logo">{phone}</div>
                <Link className="nav__link" to="tel:88129579756">
                  8 (812) 957-97-56
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
