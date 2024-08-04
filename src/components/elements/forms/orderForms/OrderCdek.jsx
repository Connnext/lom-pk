import React from "react";
import InfoText from "components/elements/text/InfoText";
import PersonalData from "../PersonalData";
import DeliveryData from "../DeliveryData";

export default function OrderCdek() {
  return (
    <>
      {/* <InfoText subtitle="Укажите пункт СДЭК для доставки" />
      <h1>CDEK API</h1> */}

      <PersonalData />
      <DeliveryData />
    </>
  );
}
