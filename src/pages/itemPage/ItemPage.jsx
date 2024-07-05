import React from "react";
import InfoTitle from "../../components/elements/titles/InfoTitle";
import InfoText from "../../components/elements/text/InfoText";
import SliderBrands from "../../components/elements/carousel/SliderBrands";
import Layout from "components/modules/layouts/Layout";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/services/productService";
import QuestionsOrderCall from "components/elements/banners/QuestionsOrderCall";
import AddToBasketButton from "components/elements/buttons/addToBasketButton/AddToBasketButton";
import SliderItemImages from "components/elements/carousel/SliderItemImages";
import PropertiesTable from "components/elements/tables/propertiesTable/PropertiesTable";
import "./itemPage.css";

function cleanUrl(url) {
  const baseUrl = "https://nkamin.ru/";
  return url.replace(baseUrl, "");
}

export default function ItemPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  console.log(data?.description);
  const text = data?.description ? (
    <div
      className="item__page--text-decor"
      dangerouslySetInnerHTML={{ __html: data.description }}
    ></div>
  ) : (
    "Описание отсутствует"
  );

  const propertiesTable = data?.properties ? (
    <PropertiesTable properties={data.properties} />
  ) : (
    "Характеристики отсутствуют"
  );

  const filesList =
    data?.files?.length > 0 ? (
      <ul>
        {data.files.map((file, index) => {
          const cleanedUrl = cleanUrl(file.file);
          return (
            <li key={index}>
              <a href={cleanedUrl} target="_blank" rel="noopener noreferrer">
                Скачать файл {index + 1}
              </a>
            </li>
          );
        })}
      </ul>
    ) : (
      "Файлы отсутствуют"
    );

  return (
    <Layout>
      <div className="container">
        <InfoTitle title={data?.title} />
        <div className="item__details">
          <div className="item__main--wrapper">
            <div className="item__details--images">
              <SliderItemImages data={data} />
            </div>
            <div className="item__main--info">
              <div className="item__important--info">
                {data?.article ? (
                  <h2 className="item__article">
                    Артикул производителя: {data?.article}
                  </h2>
                ) : (
                  ""
                )}

                <h3 className="item__brand">Бренд: {data?.brand}</h3>
                {data?.old_price != null ? (
                  <div className="item__price--wrapper">
                    <p className="item__price price__new">{data?.price}₽</p>
                    <p className="item__price price__old">{data?.old_price}₽</p>
                  </div>
                ) : (
                  <p className="item__price">{data?.price}₽</p>
                )}
              </div>
              <AddToBasketButton id={data?.id} />
            </div>
          </div>

          <div className="item__details--info">
            <div style={{ marginBottom: "20px" }}></div>
            <InfoText subtitle={"Описание"} text={text} />
            <div style={{ marginBottom: "20px" }}></div>
            <QuestionsOrderCall />
            <div style={{ marginBottom: "20px" }}></div>
            <InfoText subtitle={"Характеристики"} text={propertiesTable} />
            <div style={{ marginBottom: "20px" }}></div>
            <InfoText subtitle={"Файлы"} text={filesList} />
            <div style={{ marginBottom: "20px" }}></div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}></div>
    </Layout>
  );
}
