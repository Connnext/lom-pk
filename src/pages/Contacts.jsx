import React from "react";
import InfoTitle from "../components/elements/titles/InfoTitle";
import InfoText from "../components/elements/text/InfoText";
import YaMap from "../components/elements/map/YaMap";
import SliderStocks from "../components/elements/carousel/SliderStocks";
import { MAIL_ADRESS, PHONE_NUMBER } from "../utils/constants";
import { Link } from "react-router-dom";
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
      <li style={listItemStyle}>ИП Шельдяев А.В.</li>
      <li style={listItemStyle}>ИНН 781909518754</li>
      <li style={listItemStyle}>ОГРНИП 323784700385803</li>
      <li style={listItemStyle}>ОКПО 0066126908</li>
      <li style={listItemStyle}>ОКТМО 40372000</li>
      <li style={listItemStyle}>ОКВЭД 47.52.7</li>
    </ul>
  );

  const text2 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>Р/сч № 40802810427980001323</li>
      <li style={listItemStyle}>
        В филиале «Центральный» Банка ВТБ ПАО <br />
        БИК 044525411 К/с 30101810145250000411
      </li>
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
                "Россия, Санкт-Петербург, г. Ломоносов, ул. Привокзальная, д. 2, 2 этаж"
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
    </>
  );
}
