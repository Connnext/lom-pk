import React from "react";
import SliderStocks from "components/elements/carousel/SliderStocks";
import InfoText from "components/elements/text/InfoText";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import { guaranteesText } from "utils/textDecorate";
import VerticalDivider from "components/elements/dividers/verticalDivider/VerticalDivider";
import List from "components/elements/lists/List";
import "./guarantees.css";

export default function Guarantees() {
  return (
    <Layout>
      <SliderStocks />
      <InfoTitle title={guaranteesText.title} />
      <div className="guarantees__wrapper">
        <div className="guarantees__information">
          <InfoText
            subtitle={guaranteesText.subtitle3}
            text={guaranteesText.text3}
          />
          <InfoText
            subtitle={guaranteesText.subtitle4}
            text={guaranteesText.text4}
          />
        </div>
        <VerticalDivider hideAt={768} />
        <div className="guarantees__refund">
          <InfoText
            subtitle={guaranteesText.subtitle1}
            text={<List items={guaranteesText.text1} />}
          />
          <InfoText
            subtitle={guaranteesText.subtitle2}
            text={<List items={guaranteesText.text2} />}
          />
          <InfoText
            subtitle={guaranteesText.subtitle5}
            text={<List items={guaranteesText.text5} />}
          />
        </div>
      </div>
    </Layout>
  );
}
