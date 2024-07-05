import React, { useEffect } from "react";
import PersonalData from "../PersonalData";
import DeliveryData from "../DeliveryData";
import { useDispatch } from "react-redux";
import { orderDeliveryValid } from "./../../../../redux/store/slices/userSlice";

export default function OrderPochta() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderDeliveryValid(false));
  }, [dispatch]);
  return (
    <>
      <PersonalData />
      <DeliveryData />
    </>
  );
}
