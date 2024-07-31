import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  ADDRESS,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  GUARANTEES_ROUTE,
  MAIL_ADRESS,
  PAY_ROUTE,
  PHONE_NUMBER,
  TIME_WORK,
} from "./../../../utils/constants";
import OrderCallButton from "components/elements/buttons/orderCallButton/OrderCallButtton";
import Container from "../container/Container";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrap">
          <ul className="footer__navigation">
            <li className="footer__item">
              <h3 className="footer__title">Организация</h3>
              <Link className="footer__link" to={ABOUT_ROUTE}>
                О компании
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
                <Link className="footer__phone--link" to={PHONE_NUMBER}>
                  8 (812) 957-97-56
                </Link>
              </div>
              <div className="footer__link footer__mail">
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
          <OrderCallButton additionalClass="order__button--white" />
        </div>
        <hr className="footer__divider"></hr>
        <div className="footer__copyright">
          © Добро Пожаловать в Ломоносовский Печной Клуб! 2024 <br />
          Powered by Supreme Web Dev.
        </div>
      </Container>
    </footer>
  );
}
