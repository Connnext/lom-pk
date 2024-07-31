import React from "react";
import { Link } from "react-router-dom";
import SliderStocks from "components/elements/carousel/SliderStocks";
import InfoTitle from "components/elements/titles/InfoTitle";
import InfoText from "components/elements/text/InfoText";
import Layout from "components/modules/layouts/Layout";
import { ABOUT_ROUTE } from "utils/constants";
import { aboutCompany_text, payText } from "utils/textDecorate";
import List from "components/elements/lists/List";
import "./pay.css";

export default function Pay() {
  return (
    <Layout>
      <SliderStocks />
      <InfoTitle title={payText.title} />
      <InfoText
        subtitle={payText.subtitle1}
        text={
          <>
            {payText.text1}{" "}
            <Link className="pay__link" to={ABOUT_ROUTE}>
              {aboutCompany_text}
            </Link>
            .
          </>
        }
      />
      <InfoText subtitle={payText.subtitle2} text={payText.text2} />
      <InfoText text={<List items={payText.text3} />} />
    </Layout>
  );
}
