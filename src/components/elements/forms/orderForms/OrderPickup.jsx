import React, { useEffect } from "react";
import PersonalData from "../PersonalData";
import { useDispatch } from "react-redux";
import { orderDeliveryValid } from "./../../../../redux/store/slices/userSlice";

export default function OrderPickup({ handleSubmit }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderDeliveryValid(true));
  }, [dispatch]);
  return <PersonalData handleSubmit={handleSubmit} />;
}
