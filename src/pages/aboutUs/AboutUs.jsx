import React from "react";
import SliderBrands from "components/elements/carousel/SliderBrands";
import SliderStocks from "components/elements/carousel/SliderStocks";
import YaMap from "components/elements/map/YaMap";
import InfoText from "components/elements/text/InfoText";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import { aboutUsText } from "utils/textDecorate";
import "./aboutUs.css";

const AboutUs = () => {
  const renderParagraphs = (paragraphs) =>
    paragraphs.map((paragraph, index) => (
      <p key={index} className="paragraph">
        {paragraph}
      </p>
    ));

  const renderProductCards = (cards) =>
    cards.map((card) => (
      <div key={card.id} className="product-card">
        <img src={card.image} alt={card.title} className="product-image" />
        <p className="product-title">{card.title}</p>
      </div>
    ));

  return (
    <Layout>
      <SliderStocks />
      <InfoTitle title={aboutUsText.title} />
      <InfoText
        subtitle={aboutUsText.subtitle2}
        text={renderParagraphs(aboutUsText.text2)}
      />
      <InfoText subtitle={aboutUsText.subtitle1} />
      <div className="product-cards">
        {renderProductCards(aboutUsText.productCards)}
      </div>
      <InfoText
        subtitle={aboutUsText.subtitle3}
        text={renderParagraphs(aboutUsText.textAddress)}
      />
      <YaMap />
      <InfoText subtitle={aboutUsText.subtitle4} />
      <SliderBrands />
    </Layout>
  );
};

export default AboutUs;
