import React from "react";
import InfoText from "components/elements/text/InfoText";
import PersonalData from "../PersonalData";

export default function OrderCdek({ handleSubmit }) {
  return (
    <>
      <InfoText subtitle="Укажите пункт СДЭК для доставки" />
      <h1>CDEK API</h1>
      <PersonalData handleSubmit={handleSubmit} />
    </>
  );
}
