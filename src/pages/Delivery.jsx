import React from "react";
import InfoTitle from "../components/elements/titles/InfoTitle";
import InfoText from "../components/elements/text/InfoText";
import YaMap from "../components/elements/map/YaMap";
import SliderStocks from "../components/elements/carousel/SliderStocks";
import SliderBrands from "../components/elements/carousel/SliderBrands";
import Layout from "components/modules/layouts/Layout";

export default function Delivery() {
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

  const title = <p>Доставка</p>;
  const subtitle1 = <p>По Санкт-Петербургу</p>;
  const subtitle2 = (
    <>
      <p>По Ленинградской обл.</p>
    </>
  );
  const subtitle3 = (
    <>
      <p>Доставка в другие регионы России</p>
    </>
  );
  const subtitle4 = (
    <>
      <p>Условия разгрузки товара</p>
    </>
  );
  const text1 = (
    <>
      <p style={paragraphStyle}>
        Услуга предоставляется с понедельника по пятницу с 11 до 18 часов*,
        оформляется минимум на день вперед Время доставки сообщает утром
        водитель в день доставки
      </p>
      <p style={paragraphStyle}>
        Стоимость доставки — 1000 руб., оплата — курьеру наличными
      </p>
      <p style={paragraphStyle}>
        Крайние точки зоны доставки по Санкт-Петербургу: на юге-западе —
        развязка КАД с Таллинским ш., на севере-западе — развязка КАД с
        Выборгским ш.
      </p>
      <p style={paragraphStyle}>
        Разгрузка товара осуществляется вашими силами.
      </p>
    </>
  );
  const text2 = (
    <>
      <p style={paragraphStyle}>
        Услуга предоставляется с понедельника по субботу с 11 до 22 часов*,
        оформляется минимум на день вперед
      </p>
      <p style={paragraphStyle}>
        Время доставки сообщает утром водитель в день доставки
      </p>
      <p style={paragraphStyle}>
        Стоимость доставки — 1000 руб. + 35 руб/км от КАД, оплата — курьеру
        наличными или картой
      </p>
      <p style={paragraphStyle}>
        Крайние точки отсчета от КАД: на юге-западе — развязка КАД с Таллинским
        ш., на севере-западе — развязка КАД с Выборгским ш.
      </p>
      <p style={paragraphStyle}>
        Разгрузка товара осуществляется вашими силами.
      </p>
    </>
  );

  const text3 = (
    <>
      <p style={paragraphStyle}>
        Доставка товара в любой регион России возможна силами транспортной
        компании. Мы доставляем бесплатно товар для сдачи до терминалов
        следующих компаний: Деловые линии, ПЭК, Возовоз, Байкал Сервис, GTD
        (ранее КИТ). До терминалов других транспортных компаний цена доставки
        товара для сдачи составляет — 1000 руб.
      </p>
      <p style={paragraphStyle}>
        Цену за услугу перевозки вы можете узнать самостоятельно на сайте
        выбранной транспортной компании или связавшись с нами.
      </p>
      <p style={paragraphStyle}>
        После сдачи товара на терминал транспортной компании мы высылаем вам на
        почту скан транспортной накладной, по которой можно отслеживать место
        нахождения груза.
      </p>
    </>
  );

  const text4 = (
    <>
      <p style={paragraphStyle}>
        Услуга подразумевает под собой снятие товара с машины и занос в дом на
        первый этаж до места установки.
      </p>
      <p style={paragraphStyle}>
        Разгрузка товара осуществляется при свободном подъезде к крыльцу, все
        ограничения обговариваются заранее.
      </p>
      <p style={paragraphStyle}>
        Ширина лестниц, дверей и проходов по маршруту заноса товара должна быть
        не менее ширины заносимого товара +10% с каждой стороны.
      </p>
      <p style={paragraphStyle}>
        Время на прием и разгрузку доставленного товара — не более 30 минут с
        момента прибытия транспорта.
      </p>
      <p style={paragraphStyle}>
        Стоимость разгрузки рассчитывается за общую массу товара.
      </p>
      <p style={paragraphStyle}>
        Если масса одного товара более 200 кг — условия разгрузки обговариваются
        индивидуально.
      </p>
      <p style={paragraphStyle}>
        При выявлении несоответствия условиям на месте выгрузки услуга не
        оказывается или выполняется путем выгрузки товара с борта автомобиля без
        заноса в помещение. И оплачивается клиентом в полном размере.
      </p>
    </>
  );
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={title} />
        <InfoText subtitle={subtitle1} text={text1} />
        <div style={{ marginBottom: "20px" }}></div>
        <InfoText subtitle={subtitle2} text={text2} />
        <p
          style={{
            color: "#808080",
            fontSize: "16px",
            marginTop: "40px",
          }}
        >
          *Иные условия обговариваются индивидуально.
        </p>
        <div style={{ marginBottom: "20px" }}></div>
        <InfoText subtitle={subtitle3} text={text3} />
        <div style={{ marginBottom: "20px" }}></div>
        <InfoText subtitle={subtitle4} text={text4} />
        <div style={{ marginBottom: "20px" }}></div>
        <InfoText
          subtitle={"Самовывоз"}
          text={
            "Россия, Санкт-Петербург, г. Ломоносов, ул. Привокзальная, д. 2, 2 этаж"
          }
        />
        <div style={{ marginBottom: "20px" }}></div>
        <YaMap width={"1400px"} height={"600px"} />
        <div style={{ marginBottom: "40px" }}></div>
      </div>
    </Layout>
  );
}
