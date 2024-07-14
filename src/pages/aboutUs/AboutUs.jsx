import React from "react";
import SliderBrands from "components/elements/carousel/SliderBrands";
import SliderStocks from "components/elements/carousel/SliderStocks";
import YaMap from "components/elements/map/YaMap";
import InfoText from "components/elements/text/InfoText";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import { aboutUsText } from "utils/textDecorate";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={aboutUsText.title} />
        <div className="content-section">
          <InfoText
            subtitle={aboutUsText.subtitle2}
            text={aboutUsText.text2.map((paragraph, index) => (
              <p key={index} className="paragraph">
                {paragraph}
              </p>
            ))}
          />
        </div>
        <div className="content-section">
          <InfoText subtitle={aboutUsText.subtitle1} />
          <div className="product-cards">
            {aboutUsText.productCards.map((card) => (
              <div key={card.id} className="product-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="product-image"
                />
                <p className="product-title">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="content-section">
          <InfoText
            subtitle="Адрес и режим работы"
            text={aboutUsText.textAddress.map((line, index) => (
              <p key={index} className="paragraph">
                {line}
              </p>
            ))}
          />
        </div>
        <YaMap width="1400px" height="600px" />
      </div>
      <div className="brands-container">
        <div>
          <InfoText subtitle="Бренды" />
          <SliderBrands />
        </div>
      </div>
    </Layout>
  );
}
