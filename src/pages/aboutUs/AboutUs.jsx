import SliderBrands from "components/elements/carousel/SliderBrands";
import SliderStocks from "components/elements/carousel/SliderStocks";
import YaMap from "components/elements/map/YaMap";
import InfoText from "components/elements/text/InfoText";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import React from "react";

export default function AboutUs() {
  const paragraphStyle = {
    marginTop: "10px",
    fontSize: "20px",
    textIndent: "30px",
    textAlign: "justify",
  };
  const listStyle = {
    paddingLeft: "30px",
  };
  const listItemStyle = {
    listStyleType: "disc",
    fontSize: "20px",
    marginBottom: "5px",
  };
  const info__specialist = {
    display: "flex",
    justifyContent: "space-between",
  };
  const title = <p>O компании</p>;
  const subtitle1 = (
    <>
      <p>Ассортимент</p>
    </>
  );
  const subtitle2 = <p>Мастера Ломоносовского печного клуба</p>;
  const text1 = (
    <>
      <ul style={listStyle}>
        <li style={listItemStyle}>Печи для бани</li>
        <li style={listItemStyle}>Отопительные печи</li>
        <li style={listItemStyle}>Камины классические</li>
        <li style={listItemStyle}>Печи-камины</li>
        <li style={listItemStyle}>Печное и каминное чугунное литье</li>
        <li style={listItemStyle}>Дымоходы</li>
      </ul>
    </>
  );
  const text2 = (
    <>
      <p style={paragraphStyle}>
        Специалисты нашей компании проходят регулярные тренинги, организуемые
        производителями печей и каминов, чьими дилерами мы являемся!
      </p>
      <p style={paragraphStyle}>
        Наши продавцы помогут подобрать всю необходимую комплектацию для монтажа
        печи или монтажа камина, начиная с «буржуйки» и до классического
        мраморного камина, в зависимости от ваших нужд, вкусов и возможностей.
      </p>
      <p style={paragraphStyle}>
        Наши водители помогут осуществить доставку оборудования в любой район
        Ломоносовский район и Ленинградской области.
      </p>
      <p style={paragraphStyle}>
        Мы подскажем как правильно использовать и ухаживать за печами и
        каминами, подберем комплектацию к каждому товару, поможем купить камин
        или печь, максимально соответствующие вашему вкусу и предпочтениям. Все
        наши специалисты в совершенстве владеют информацией о продукции каждого
        поставщика и окажут квалифицированную поддержку в любое время.
      </p>
    </>
  );
  const textAdress = (
    <>
      <p>
        Россия, Санкт-Петербург, г. Ломоносов, ул. Привокзальная, д. 2, стр. 3,
        2 этаж
      </p>
      <p>Пн - Пт с 11:00 до 19:00</p>
      <p>Суббота с 11:00 до 18:00</p>
    </>
  );
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={title} />
        <InfoText subtitle={subtitle2} text={text2} />
        <div style={{ marginBottom: "20px" }}></div>
        <InfoText subtitle={subtitle1} text={text1} />
        <div style={{ marginBottom: "20px" }}></div>
        <InfoText subtitle={"Адрес"} text={textAdress} />
        <div style={{ marginBottom: "20px" }}></div>
        <YaMap width={"1400px"} height={"600px"} />
      </div>
      <div style={{ marginBottom: "20px" }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <div>
          <InfoText subtitle={"Бренды"} />
          <SliderBrands />
        </div>
      </div>
    </Layout>
  );
}
