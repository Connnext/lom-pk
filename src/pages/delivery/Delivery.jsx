import React from "react";
import SliderStocks from "components/elements/carousel/SliderStocks";
import YaMap from "components/elements/map/YaMap";
import InfoText from "components/elements/text/InfoText";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import { deliveryText, pickup_text } from "utils/textDecorate";
import "./delivery.css";

export default function Delivery() {
  return (
    <Layout>
      <SliderStocks />
      <InfoTitle title={deliveryText.title} />
      <InfoText subtitle={deliveryText.subtitle1} text={deliveryText.text1} />
      <InfoText subtitle={deliveryText.subtitle2} text={deliveryText.text2} />
      <p className="sub-text">{deliveryText.subText}</p>
      <InfoText subtitle={deliveryText.subtitle3} text={deliveryText.text3} />
      <InfoText subtitle={deliveryText.subtitle4} text={deliveryText.text4} />
      <InfoText subtitle={pickup_text} text={deliveryText.textAddress} />
      <YaMap />
    </Layout>
  );
}
