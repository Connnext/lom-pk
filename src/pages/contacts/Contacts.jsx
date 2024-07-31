import React from "react";
import { MAIL_ADRESS, PHONE_NUMBER } from "../../utils/constants";
import { Link } from "react-router-dom";
import Layout from "components/modules/layouts/Layout";
import SliderStocks from "components/elements/carousel/SliderStocks";
import InfoTitle from "components/elements/titles/InfoTitle";
import InfoText from "components/elements/text/InfoText";
import YaMap from "components/elements/map/YaMap";
import { contactsText } from "utils/textDecorate";
import List from "components/elements/lists/List";
import VerticalDivider from "components/elements/dividers/verticalDivider/VerticalDivider";
import "./contacts.css";

export default function Contacts() {
  const text3 = (
    <Link className="contacts__link" to={PHONE_NUMBER}>
      {contactsText.text3}
    </Link>
  );
  const text4 = (
    <Link className="contacts__link" to={MAIL_ADRESS}>
      {contactsText.text4}
    </Link>
  );
  return (
    <Layout>
      <SliderStocks />
      <InfoTitle title={contactsText.title} />
      <div className="contacts__wrapper">
        <div className="contacts__information">
          <InfoText subtitle={contactsText.subtitle3} text={text3} />
          <InfoText subtitle={contactsText.subtitle4} text={text4} />
          <InfoText
            subtitle={contactsText.subtitleAddress}
            text={contactsText.address}
          />
          <YaMap />
        </div>
        <VerticalDivider hideAt={1100} />
        <div className="contacts__requisites">
          <InfoText
            subtitle={contactsText.subtitle1}
            text={<List items={contactsText.text1} />}
          />
          <InfoText
            subtitle={contactsText.subtitle2}
            text={<List items={contactsText.text2} />}
          />
        </div>
      </div>
    </Layout>
  );
}
