import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  GUARANTEES_ROUTE,
  PAY_ROUTE,
  PHONE_NUMBER,
} from "../../../../utils/constants";
import phone from "img/phone.svg";
import "./contacts.css";
import Container from "components/modules/container/Container";

export default function ContactsNav() {
  return (
    <>
      <div className="contacts">
        <Container>
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
              <li className="nav__item">
                <Link className="nav__link" to={GUARANTEES_ROUTE}>
                  Гарантии и возврат
                </Link>
              </li>
            </ul>
            <div className="nav__item--phone">
              <Link className="nav__link nav__phone" to={PHONE_NUMBER}>
                8 (812) 957-97-56
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}
