import React from "react";
import { Link } from "react-router-dom";
import SliderStocks from "../components/elements/carousel/SliderStocks";
import InfoTitle from "../components/elements/titles/InfoTitle";
import InfoText from "../components/elements/text/InfoText";
import { ABOUT_ROUTE } from "../utils/constants";
import Layout from "components/modules/layouts/Layout";

export default function Pay() {
  const listStyle = {
    paddingLeft: "47px",
  };
  const listItemStyle = {
    listStyleType: "disc",
    fontSize: "18px",
    marginBottom: "5px",
  };
  const info__specialist = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  };
  const title = <p>Oплата</p>;
  const subtitle1 = (
    <>
      <p>Наличный расчёт</p>
    </>
  );
  const subtitle2 = <p>Банковской картой</p>;
  const text1 = (
    <p style={{ textIndent: "30px" }}>
      При доставке товара курьером предусмотрена оплата наличными курьеру в
      момент получения заказа. Пожалуйста, обязательно проверьте комплектацию
      товара, наличие гарантийного талона и чека во время получения.
      Дополнительную информацию о нашем оффлайн магазине можно найти в разделе{" "}
      <Link
        style={{
          transition: "color 0.3s",
          color: "rgb(133, 10, 10)",
        }}
        to={ABOUT_ROUTE}
        onMouseEnter={(e) => (e.target.style.color = "rgb(165, 8, 8)")}
        onMouseLeave={(e) => (e.target.style.color = "rgb(133, 10, 10)")}
      >
        «О компании»
      </Link>
      .
    </p>
  );
  const text2 = (
    <>
      <p style={{ paddingBottom: "10px", textIndent: "30px" }}>
        Для выбора оплаты товара с помощью банковской карты на соответствующей
        странице необходимо нажать кнопку оплата заказа банковской картой.
        Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт
        следующих платёжных систем:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>МИР</li>
        <li style={listItemStyle}>VISA International</li>
        <li style={listItemStyle}>Mastercard Worldwide</li>
        <li style={listItemStyle}>JCB</li>
      </ul>
      <p
        style={{
          color: "#808080",
          fontSize: "16px",
          marginTop: "40px",
        }}
      >
        Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на
        платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача
        информации осуществляется в защищённом режиме с использованием протокола
        шифрования SSL. В случае если Ваш банк поддерживает технологию
        безопасного проведения интернет-платежей Verified By Visa, MasterCard
        SecureCode, MIR Accept, J-Secure для проведения платежа также может
        потребоваться ввод специального пароля.
        <br />
        Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность
        сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК.
        Введённая информация не будет предоставлена третьим лицам за исключением
        случаев, предусмотренных законодательством РФ. Проведение платежей по
        банковским картам осуществляется в строгом соответствии с требованиями
        платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.
      </p>
    </>
  );
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={title} />
        <InfoText subtitle={subtitle1} text={text1} />
        <InfoText subtitle={subtitle2} text={text2} />
      </div>
    </Layout>
  );
}
