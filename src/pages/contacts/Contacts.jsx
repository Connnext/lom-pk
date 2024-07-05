import React from "react";
import { MAIL_ADRESS, PHONE_NUMBER } from "../../utils/constants";
import { Link } from "react-router-dom";
import Layout from "components/modules/layouts/Layout";
import SliderStocks from "components/elements/carousel/SliderStocks";
import InfoTitle from "components/elements/titles/InfoTitle";
import InfoText from "components/elements/text/InfoText";
import YaMap from "components/elements/map/YaMap";
export default function Contacts() {
  const listStyle = {
    paddingLeft: "30px",
  };
  const listItemStyle = {
    listStyleType: "disc",
    fontSize: "20px",
    marginBottom: "5px",
  };

  const title = <p>Контакты</p>;
  const subtitle1 = <p>Реквизиты</p>;
  const subtitle2 = <p>Банковские реквизиты</p>;
  const subtitle3 = <p>Телефон</p>;
  const subtitle4 = <p>Почта</p>;
  const text1 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ БАБУРИН СЕРГЕЙ ВЛАДИМИРОВИЧ
      </li>
      <li style={listItemStyle}>
        Регистрация: Лен. обл. Выборгский р-он, д. Вишневка, ул.Луговая д.33.
      </li>
      <li style={listItemStyle}>
        Магазин: 198412, С-Пб, г. Ломоносов, ул. Привокзальная д.2, стр.3
      </li>
      <li style={listItemStyle}>ИП Бабурин С.В.</li>
      <li style={listItemStyle}>ИНН 470418502386</li>
      <li style={listItemStyle}>ОГРНИП 323470400070350</li>
      <li style={listItemStyle}>ОКПО</li>
      <li style={listItemStyle}>ОКАТО</li>
      <li style={listItemStyle}>ОКТМО 40372000</li>
      <li style={listItemStyle}>ОКОГУ</li>
      <li style={listItemStyle}>ОКФС</li>
      <li style={listItemStyle}>ОКОПФ</li>
      <li style={listItemStyle}>ОКВЭД 47.52.7</li>
    </ul>
  );

  const text2 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>р/с 40802810227980000142</li>
      <li style={listItemStyle}>к/с 30101810145250000411</li>
      <li style={listItemStyle}>БИК 044525411</li>
      <li style={listItemStyle}>В филиале «Центральный» Банка ВТБ ПАО</li>
    </ul>
  );
  const text3 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        <Link style={{ color: "rgb(133, 10, 10)" }} to={PHONE_NUMBER}>
          8 (812) 957-97-56
        </Link>
      </li>
    </ul>
  );
  const text4 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        <Link style={{ color: "rgb(133, 10, 10)" }} to={MAIL_ADRESS}>
          info@lom-pk.ru
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <Layout>
        <div className="container">
          <SliderStocks />
          <InfoTitle title={title} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
            className="contacts__wrapper"
          >
            <div className="contacts__information">
              <InfoText subtitle={subtitle3} text={text3} />
              <div style={{ marginBottom: "20px" }}></div>
              <InfoText subtitle={subtitle4} text={text4} />
              <div style={{ marginBottom: "20px" }}></div>
              <InfoText
                subtitle={"Адрес"}
                text={
                  "Россия, Санкт-Петербург, г. Ломоносов, ул. Привокзальная, д. 2, стр. 3, 2 этаж"
                }
              />
              <div style={{ marginBottom: "20px" }}></div>
              <YaMap width={"659px"} height={"400px"} />
            </div>
            <div
              style={{
                borderLeft: "1px solid #ced4d7",
                height: "auto",
              }}
            ></div>
            <div className="contacts__requisites">
              <InfoText subtitle={subtitle1} text={text1} />
              <div style={{ marginBottom: "20px" }}></div>
              <InfoText subtitle={subtitle2} text={text2} />
              <div style={{ marginBottom: "20px" }}></div>
            </div>

            <div style={{ marginBottom: "40px" }}></div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}></div>
      </Layout>
    </>
  );
}
