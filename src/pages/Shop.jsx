import SliderBrands from "components/elements/carousel/SliderBrands";
import SliderStocks from "components/elements/carousel/SliderStocks";
import Layout from "components/modules/layouts/Layout";
import React from "react";
import img from "./../img/phpeyjgaa-200.jpg";
import InfoTitle from "components/elements/titles/InfoTitle";
import ItemCards from "components/modules/item/ItemCards";

export default function Shop() {
  const data = [
    {
      id: 2,
      title: "Отопительная печь-камин Везувий В5С",
      price: 1000,
      description: "описание",
      images: [img, img, img],
      category: "Печка",
    },
    {
      id: 3,
      title: "Отопительная печь-камин Везувий В5С",
      price: 1000,
      description: "описание",
      images: [img, img, img],
      category: "Печка",
    },
    {
      id: 4,
      title: "Отопительная печь-камин Везувий В5С",
      price: 1000,
      description: "описание",
      images: [img, img, img],
      category: "Печка",
    },
    {
      id: 5,
      title: "Отопительная печь-камин Везувий В5С",
      price: 1000,
      description: "описание",
      images: [img, img, img],
      category: "Печка",
    },
    {
      id: 6,
      title: "Отопительная печь-камин Везувий В5С",
      price: 1000,
      description: "описание",
      images: [img, img, img],
      category: "Печка",
    },
    {
      id: 7,
      title: "Отопительная печь-камин Везувий В5С",
      price: 1000,
      description: "описание",
      images: [img, img, img],
      category: "Печка",
    },
  ];
  const titleHits = "Хиты";
  const titleNews = "Новинки";
  const titleStocks = "Акции";
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={titleHits} />
        <ItemCards data={data} />
        <InfoTitle title={titleNews} />
        <ItemCards data={data} />
        <InfoTitle title={titleStocks} />
        <ItemCards data={data} />
        <SliderBrands />
        <div>отзывы</div>
      </div>
    </Layout>
  );
}
