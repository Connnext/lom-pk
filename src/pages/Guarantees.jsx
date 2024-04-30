import React from "react";
import InfoTitle from "../components/elements/titles/InfoTitle";
import InfoText from "../components/elements/text/InfoText";
import YaMap from "../components/elements/map/YaMap";
import SliderStocks from "../components/elements/carousel/SliderStocks";
import { MAIL_ADRESS, PHONE_NUMBER } from "../utils/constants";
import { Link } from "react-router-dom";
import Layout from "components/modules/layouts/Layout";

export default function Guarantees() {
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
  const subtitleStyle = {
    lineHeight: "30px",
  };

  const title = <p>Гарантии и возврат</p>;
  const subtitle1 = <p style={subtitleStyle}>Причины для возврата товара</p>;
  const subtitle2 = <p style={subtitleStyle}>Способы возврата товара</p>;
  const subtitle3 = <p style={subtitleStyle}>Гарантия</p>;
  const subtitle4 = (
    <p style={subtitleStyle}>
      Памятка потребителю «О гарантийном обслуживании товара»
    </p>
  );
  const subtitle5 = <p>Срок возврата товара</p>;

  const text1 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        Товар не подошел по характеристикам, комплектации, размеру, свойствам и
        т. п.
      </li>
      <li style={listItemStyle}>
        Внешний вид товара отличается от изображения на сайте.
      </li>
      <li style={listItemStyle}>
        Остался лишний товар (например, после монтажа).
      </li>
      <li style={listItemStyle}>Товар возвращается по браку.</li>
    </ul>
  );
  const text5 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        Срок возврата товара надлежащего качества (по первым трем причинам
        возврата) составляет 60 дней с момента получения товара.
      </li>
      <li style={listItemStyle}>
        (!) Товар принимается назад только в полной комплектации, со всеми
        упаковками и наклейками, в неиспользованном виде.
      </li>
      <li style={listItemStyle}>
        Качественные товары, не подлежащие обмену и возврату, указаны в Перечне,
        утвержденном постановлением Правительства РФ от 19 января 1998 г. (с
        изменениями на 20 октября 1998 г.) № 55.
      </li>
    </ul>
  );

  const text2 = (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        Возврата товара, приобретенного в розничном магазине нашей компании,
        возможен только в этот же магазин.
      </li>
      <li style={listItemStyle}>
        Товар, приобретенный через услугу доставки по Санкт-Петербургу и Лен.
        области, может быть возвращен только в магазин, указанный в товарном
        чеке.
      </li>
      <li style={listItemStyle}>
        Товар, отправленный в регион России силами транспортной компании,
        отправляется назад так же транспортным перевозчиком (любым на выбор) за
        счет покупателя. В случае неправильной комплектации заказа или наличии
        дефекта стоимость обратной доставки оплачивает продавец.
      </li>
      <li style={listItemStyle}>Возврат от юр. лиц не принимается.</li>
    </ul>
  );
  const text3 = (
    <>
      <p style={paragraphStyle}>
        Мы являемся официальными дилерами всех производителей оборудования,
        продаваемого в нашей компании. Поэтому на всю продукцию распространяется
        фирменная гарантия производителя. Срок гарантии устанавливает
        завод-изготовитель.
      </p>
      <p style={paragraphStyle}>
        При покупке товара вы получаете документ, подтверждающий факт
        приобретения товара, а также паспорт товара от завода-изготовителя с
        гарантийными обязательствами.
      </p>
      <p style={paragraphStyle}>
        В рамках всего установленного срока гарантии вы можете обратиться в нашу
        компанию для разрешения ситуации, вызванной нарушением качества, свойств
        и характеристик приобретенного товара.
      </p>
    </>
  );
  const text4 = (
    <>
      <p style={paragraphStyle}>
        Какие законы и нормативно-правовые акты регулируют гарантийное
        обслуживание товаров? <br />
        Гарантийное обслуживание регулируется Гражданским кодексом РФ (далее ГК
        РФ), Федеральным законом «О защите прав потребителей» (далее Закон), ФЗ
        «Об участии в долевом строительстве многоквартирных домов и иных
        объектов недвижимости», Положением о гарантийном обслуживании легковых
        автомобилей и мототехники РД 37.009.025-92 и т.п.
      </p>
      <p style={paragraphStyle}>
        Является ли установление гарантийного срока обязательным?
        <br />В соответствии со статьей 470 ГК РФ, договором может быть
        предусмотрено предоставление продавцом гарантии качества товара.
        Продавец, согласно статье 469 ГК РФ и ст. 4 Закона, обязан передать
        покупателю товар, качество которого соответствует договору
        купли-продажи. Изготовитель (исполнитель) вправе устанавливать на товар
        (работу) гарантийный срок - период, в течение которого в случае
        обнаружения в товаре (работе) недостатка изготовитель (исполнитель),
        продавец обязаны удовлетворить требования потребителя. К таким
        требованиям относятся: замена товара, соразмерное уменьшение цены,
        незамедлительное безвозмездное устранение недостатков товара (работы)
        или возмещение расходов на их исправление потребителем или третьим
        лицом, отказ от исполнения договора и требование возврата уплаченной
        суммы.
      </p>
    </>
  );
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={title} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " stretch",
            gap: "20px",
          }}
          className="guarantees__wrapper"
        >
          <div className="guarantees__information">
            <InfoText subtitle={subtitle3} text={text3} />
            <div style={{ marginBottom: "20px" }}></div>
            <InfoText subtitle={subtitle4} text={text4} />
            <div style={{ marginBottom: "20px" }}></div>
          </div>
          <div
            style={{
              borderLeft: "1px solid #ced4d7",
              height: "auto",
            }}
          ></div>
          <div className="guarantees__refund">
            <InfoText subtitle={subtitle1} text={text1} />
            <div style={{ marginBottom: "20px" }}></div>
            <InfoText subtitle={subtitle2} text={text2} />
            <div style={{ marginBottom: "20px" }}></div>
            <InfoText subtitle={subtitle5} text={text5} />
          </div>

          <div style={{ marginBottom: "40px" }}></div>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}></div>
    </Layout>
  );
}
